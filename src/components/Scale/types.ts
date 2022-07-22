import type { IScaleControlOption } from '@antv/l7-component';

/**
 * 组件类型定义
 */
export interface ScaleProps extends Partial<Omit<IScaleControlOption, 'name'>> {}
