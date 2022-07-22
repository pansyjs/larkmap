import type { CSSProperties } from 'react';

export type CommonProps = {
  /** 类名 */
  className?: string;
  /** 行内样式 */
  style?: CSSProperties;
};

export type {
  DrawData,
  DrawType,
  PartialDrawCircleOptions,
  PartialDrawLineOptions,
  PartialDrawPointOptions,
  PartialDrawPolygonOptions,
  PartialDrawRectOptions,
} from './draw';
