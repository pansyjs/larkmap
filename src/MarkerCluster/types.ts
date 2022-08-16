import type { IMarkerLayerOption } from '@antv/l7';

import type { LngLat } from '@/types';

export interface Geometry {
  type: string;
  coordinates: [number, number],
}

export interface ClusterProperties<D = any> {
  cluster: boolean;
  cluster_id: string;
  clusterData: {
    geometry: Geometry;
    properties: D & { marker_id: string; };
  }[];
  point_count: number;
  point_count_abbreviated: number;
}

export interface MarkerElementArgs<D = any> {
  geometry: Geometry;
  properties: D & { marker_id: string; };
}

export interface ClusterElementArgs<D = any> {
  id: string;
  type: string;
  geometry: Geometry;
  properties: ClusterProperties<D>;
}

export type RenderMarkerFun = (data: ClusterElementArgs) => React.ReactNode | string;

export interface MarkerClusterProps<D extends object = any> extends Partial<IMarkerLayerOption> {
  /** 需要聚合的数据 */
  data?: D[];
  /**
   * 点击聚合时，是否散开
   * @default true
   */
  zoomOnClick?: boolean,
  /** 非聚合点渲染扩展 */
  render?: React.ReactNode | string | RenderMarkerFun;
  /** 聚合点渲染扩展 */
  renderCluster?: React.ReactNode | string | RenderMarkerFun;
  /** 获取聚合点经度 */
  getLng?: (data: D) => number;
  /** 获取聚合点纬度 */
  getLat?: (data: D) => number;
}

export type { IMarkerLayerOption as MarkerLayerOption, LngLat }
