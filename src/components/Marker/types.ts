import type { IMarkerOption, Marker } from '@antv/l7';
import type { SyntheticEvent } from 'react';

import type { LngLat } from '@/types';

export interface Event<ExtData = any> {
  data?: ExtData
  lngLat: LngLat;
  target: SyntheticEvent<any>;
}

export type EventCallback<ExtData = any> = (e: Event<ExtData>, marker: Marker) => void;

export interface Events<ExtData = any> {
  onClick: EventCallback<ExtData>;
  onMoveStart: EventCallback<ExtData>;
  onMouseUp: EventCallback<ExtData>;
  onDoubleClick: EventCallback<ExtData>;
  onContextMenu: EventCallback<ExtData>;
  onMouseOver: EventCallback<ExtData>;
  onMouseMove: EventCallback<ExtData>;
  onMouseOut: EventCallback<ExtData>;
}

export type EventMapping = { [T in keyof Events]: string };

/**
 * 组件类型定义
 */
export interface MarkerProps<ExtData = any> extends Partial<Events<ExtData>>, Partial<Omit<IMarkerOption, 'element'>> {
  /** 标注点经纬度 */
  lngLat: LngLat;
  /** 子组件 */
  children?: React.ReactNode;
}