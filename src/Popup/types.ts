import type { IPopupOption } from '@antv/l7';

import type { LngLat } from '@/types';

/**
 * 组件类型定义
 */
export interface PopupProps extends Partial<IPopupOption> {
  /** 标注点经纬度 */
  lngLat: LngLat;
  /** 打开信息框事件 */
  onOpen?: () => void;
  /** 关闭信息框事件 */
  onClose?: () => void;
  /** 子组件 */
  children?: React.ReactNode;
}
