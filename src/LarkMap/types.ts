import type { ReactNode, SyntheticEvent } from "react";
import type { IMapConfig, IMapWrapper, ISceneConfig, Scene } from "@antv/l7";
import type { CommonProps, LngLat } from "@/types";

import type { LayerManager } from "@/utils";

export type LarkMapContextValue = {
  scene: Scene;
  layerManager: LayerManager;
};

export interface MapEvent<T extends EventTypes> {
  type: T;
  target: any;
  originEvent: SyntheticEvent;
}

export interface Event<T extends EventTypes> extends MapEvent<T> {
  lnglat: LngLat;
  pixel: {
    x: number;
    y: number;
  };
}

export type EventTypes =
  | "resize"
  | "move"
  | "movestart"
  | "moveend"
  | "zoom"
  | "zoomstart"
  | "zoomend"
  | "click"
  | "dblclick"
  | "mousemove"
  | "mousewheel"
  | "mouseover"
  | "mouseout"
  | "mouseup"
  | "mousedown"
  | "contextmenu"
  | "dragstart"
  | "dragging"
  | "dragend";

export type MapEventCallback<T extends EventTypes> = (
  e: MapEvent<T>,
  scene: Scene
) => void;
export type EventCallback<T extends EventTypes> = (
  e: Event<T>,
  scene: Scene
) => void;

// TODO: Gaode 和 Mapbox 类型不一致
export interface Events {
  /** 地图容器大小改变事件 */
  onResize: (e: undefined, scene: Scene) => void;
  /** 地图平移时触发事件 */
  onMapMove: MapEventCallback<"movestart">;
  /** 地图平移开始时触发 */
  onMoveStart: MapEventCallback<"movestart">;
  /** 地图移动结束后触发 */
  onMoveEnd: MapEventCallback<"moveend">;
  /** 地图缩放级别更改后触发 */
  onZoomChange: MapEventCallback<"zoom">;
  /** 缩放开始时触发 */
  onZoomStart: MapEventCallback<"zoomstart">;
  /** 缩放停止时触发 */
  onZoomEnd: MapEventCallback<"zoomend">;
  /** 鼠标左键点击事件 */
  onClick: EventCallback<"click">;
  /** 鼠标左键双击事件 */
  onDoubleClick: EventCallback<"dblclick">;
  /** 鼠标在地图上移动时触发 */
  onMouseMove: EventCallback<"mousemove">;
  /** 鼠标滚轮开始缩放地图时触发 */
  onMouseWheel: EventCallback<"mousewheel">;
  /** 鼠标移入地图容器内时触发 */
  onMouseOver: EventCallback<"mouseover">;
  /** 鼠标移出地图容器时触发 */
  onMouseOut: EventCallback<"mouseout">;
  /** 鼠标在地图上单击抬起时触发 */
  onMouseUp: EventCallback<"mouseup">;
  /** 鼠标在地图上单击按下时触发 */
  onMouseDown: EventCallback<"mousedown">;
  /** 鼠标右键单击事件 */
  onContextMenu: EventCallback<"contextmenu">;
  /** 开始拖拽地图时触发 */
  onDragStart: EventCallback<"dragstart">;
  /** 拖拽地图过程中触发 */
  onDragging: EventCallback<"dragging">;
  /** 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 */
  onDragEnd: EventCallback<"dragend">;
}

export type EventMapping = { [T in keyof Events]: string };

export interface LarkMapRefAttributes {
  /** 获取 Scene 实例 */
  getScene: () => Scene;
  /** 获取 Map 实例 */
  getMap: () => Scene["map"];
}

interface TMapOptions extends Partial<IMapConfig> {
  /**
   * 业务瓦片请求列表
   */
  SensoroTiles?: string[];
  /**
   * 业务统一授权 ’Bearer xxx‘
   */
  Authorization?: string;
  /** 图层请求header额外参数 */
  headerExtra?: { [key: string]: any };
}
export interface LarkMapProps
  extends Partial<Events>,
    CommonProps,
    Partial<ISceneConfig> {
  /** 地图类型 */
  mapType?: "GaodeV1" | "GaodeV2" | "Mapbox" | "Map" | "MapboxV2";
  /** 地图实例，可选，也可以通过配置项自动生成实例 */
  map?: IMapWrapper;
  /**
   * 地图配置项
   * 配合地图类型配置地图，
   * 配置项详见 [L7-Map](https://l7.antv.vision/zh/docs/api/map/map)
   * */
  mapOptions?: TMapOptions & {
    mapboxStylePrefix?: string;
    mapboxSatellitePrefix?: string;
  };
  children?: ReactNode;
  /** 场景加载成功回调 */
  onLoaded?: (scene: Scene) => void;
}
