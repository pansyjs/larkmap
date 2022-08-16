import type { IMarkerLayerOption } from '@antv/l7';

import type { LngLat } from '@/types';

export interface Geometry {
  type: 'Point';
  /** 经纬度 */
  coordinates: [number, number],
}

export interface Properties<D = any> {
  geometry: Geometry;
  properties: D & { marker_id: string; };
}

export interface ClusterProperties<D = any> {
  cluster: true;
  cluster_id: string;
  clusterData: {
    geometry: Geometry;
    properties: D & { marker_id: string; };
  }[];
  point_count: number;
  point_count_abbreviated: number;
}

export interface Feature<D = any> {
  id: string;
  type: 'Feature';
  geometry: Geometry;
  properties: D;
}

export type ElementArgs<D = any> = Feature<ClusterProperties<D>> | Feature<Properties<D>>

export type RenderMarkerFun<D = any> = (data: D) => React.ReactNode | string;

export interface MarkerClusterProps<D extends object = any> extends Partial<IMarkerLayerOption> {
  /** 需要聚合的数据 */
  data?: D[];
  /**
   * 点击聚合时，是否散开
   * @default true
   */
  zoomOnClick?: boolean,
  /** 禁用下钻逻辑的最大层级 */
  disabledDrillDownMaxZoom?: number;
  /** 非聚合点渲染扩展 */
  render?: React.ReactNode | string | RenderMarkerFun<Feature<Properties<D>>>;
  /** 聚合点渲染扩展 */
  renderCluster?: React.ReactNode | string | RenderMarkerFun<Feature<ClusterProperties<D>>>;
  /** 获取聚合点经度 */
  getLng?: (data: D) => number;
  /** 获取聚合点纬度 */
  getLat?: (data: D) => number;
  /** 聚合点点击事件 */
  onClick?: (e: ElementArgs<D>) => void;
}

export type { IMarkerLayerOption as MarkerLayerOption, LngLat }
