import type { IMarkerLayerOption } from '@antv/l7';

import type { LngLat } from '@/types';

interface Geometry {
  type: string;
  coordinates: [number, number],
}

interface Properties {
  cluster: boolean;
  marker_id: string;
  clusterData: {
    geometry: Geometry;
    properties: Properties;
  }[];
  point_count: number;
  point_count_abbreviated: number;
}

export interface ClusterElementArgs {
  id: string;
  geometry: Geometry;
  properties: Properties;
  type: string;
}

export type RenderMarkerFun = (data: ClusterElementArgs) => React.ReactNode | string;

export interface MarkerClusterProps<D extends { lngLat: LngLat; } = any> extends Partial<IMarkerLayerOption> {
  data?: D[];
  /**
   * 非聚合点渲染扩展
   */
  render?: React.ReactNode | string | RenderMarkerFun;

  /**
   * 聚合点渲染扩展
   */
  renderCluster?: React.ReactNode | string | RenderMarkerFun;
}

export type { IMarkerLayerOption as MarkerLayerOption, LngLat }
