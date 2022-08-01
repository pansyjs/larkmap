import type { ReactNode, SyntheticEvent } from 'react';
import type { IMapConfig, IMapWrapper, ISceneConfig, Scene } from '@antv/l7';
import type { CommonProps, LngLat } from '@/types';

import type { LayerManager } from '@/utils';

export type LarkMapContextValue = {
  scene: Scene;
  layerManager: LayerManager;
};

export interface Event {
  type: string;
  originEvent: SyntheticEvent;
  lnglat: LngLat;
  pixel: {
    x: number;
    y: number;
  };
  target: any;
}

export type EventCallback = (e: Event, scene: Scene) => void;

export interface Events {
  /** 地图容器大小改变事件 */
  onResize: EventCallback;
  /** 地图平移时触发事件 */
  onMapMove: EventCallback;
  /** 地图平移开始时触发 */
  onMoveStart: EventCallback;
  /** 地图移动结束后触发 */
  onMoveEnd: EventCallback;
  /** 地图缩放级别更改后触发 */
  onZoomChange: EventCallback;
  /** 缩放开始时触发 */
  onZoomStart: EventCallback;
  /** 缩放停止时触发 */
  onZoomEnd: EventCallback;
  /** 鼠标左键点击事件 */
  onClick: EventCallback;
  /** 鼠标左键双击事件 */
  onDoubleClick: EventCallback;
  /** 鼠标在地图上移动时触发 */
  onMouseMove: EventCallback;
  /** 鼠标滚轮开始缩放地图时触发 */
  onMouseWheel: EventCallback;
  /** 鼠标移入地图容器内时触发 */
  onMouseOver: EventCallback;
  /** 鼠标移出地图容器时触发 */
  onMouseOut: EventCallback;
  /** 鼠标在地图上单击抬起时触发 */
  onMouseUp: EventCallback;
  /** 鼠标在地图上单击按下时触发 */
  onMouseDown: EventCallback;
  /** 鼠标右键单击事件 */
  onContextMenu: EventCallback;
  /** 开始拖拽地图时触发 */
  onDragStart: EventCallback;
  /** 拖拽地图过程中触发 */
  onDragging: EventCallback;
  /** 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 */
  onDragEnd: EventCallback;
}

export type EventMapping = { [T in keyof Events]: string };

export interface LarkMapRefAttributes {
  /** 获取 Scene 实例 */
  getScene: () => Scene;
  /** 获取 Map 实例 */
  getMap: () => Scene['map'];
}

export interface LarkMapProps extends Partial<Events>, CommonProps, Omit<ISceneConfig, 'id' | 'canvas' | 'map'> {
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
  onLoaded?: (scene: Scene) => void;
}
