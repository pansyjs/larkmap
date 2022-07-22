import type { IZoomControlOption } from '@antv/l7-component';

/**
 * 组件类型定义
 */
export interface ZoomProps extends Partial<Omit<IZoomControlOption, 'name'>> {}
