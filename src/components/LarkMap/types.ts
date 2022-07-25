import type { ReactNode, SyntheticEvent } from 'react';
import type { IMapConfig, IMapWrapper, ISceneConfig, Scene } from '@antv/l7';
import type { CommonProps } from '@/types';

import type { LayerManager } from '@/utils';

export type LarkMapContextValue = {
  scene: Scene;
  layerManager: LayerManager;
};

export type MapEvent = () => void;

export interface Events {
  /** 地图加载完成触发 */
  onLoaded: MapEvent;
  /** 地图容器大小改变事件 */
  onResize: MapEvent;
  /** 地图平移时触发事件 */
  onMapMove: MapEvent;
  /** 地图平移开始时触发 */
  onMoveStart: MapEvent;
  /** 地图移动结束后触发 */
  onMoveEnd: MapEvent;
  /** 地图缩放级别更改后触发 */
  onZoomChange: MapEvent;
  /** 缩放开始时触发 */
  onZoomStart: MapEvent;
  /** 缩放停止时触发 */
  onZoomEnd: MapEvent;
  onClick: MapEvent;
}

export type EventMapping = { [T in keyof Events]: string };

export type Listeners = {
  [T in keyof Events]: (evt: SyntheticEvent<any>) => void // tslint:disable-line:no-any
};

export interface LarkMapRefAttributes {
  /** 获取 Scene 实例 */
  getScene: () => Scene;
  /** 获取 Map 实例 */
  getMap: () => Scene['map'];
}

export interface LarkMapProps extends Events, CommonProps, Omit<ISceneConfig, 'id' | 'canvas' | 'map'> {
  /** 地图类型 */
  mapType?: 'GaodeV1' | 'GaodeV2' | 'Mapbox' | 'Map';
  /** 地图实例，可选，也可以通过配置项自动生成实例 */
  map?: IMapWrapper;
  /**
   * 地图配置项
   * 配合地图类型配置地图，
   * 配置项详见 [L7-Map](https://l7.antv.vision/zh/docs/api/map/map)
   * */
  mapOptions?: Partial<IMapConfig>;
  children?: ReactNode;
  /** 场景加载成功回调 */
  onSceneLoaded?: (scene: Scene) => void;
}
