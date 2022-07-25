import type { EventMapping, } from './types';

export const events: EventMapping = {
  onResize: 'resize',
  onMapMove: 'mapmove',
  onMoveStart: 'movestart',
  onMoveEnd: 'moveend',
  onZoomChange: 'zoomchange',
  onZoomStart: 'zoomstart',
  onZoomEnd: 'zoomend',
  onClick: 'click',
  onDoubleClick: 'dblclick',
  /** 鼠标在地图上移动时触发 */
  onMouseMove: 'mousemove',
  /** 鼠标滚轮开始缩放地图时触发 */
  onMouseWheel:'mousewheel',
  /** 鼠标移入地图容器内时触发 */
  onMouseOver: 'mouseover',
  /** 鼠标移出地图容器时触发 */
  onMouseOut: 'mouseout',
  /** 鼠标在地图上单击抬起时触发 */
  onMouseUp: 'mouseup',
  /** 鼠标在地图上单击抬起时触发 */
  onMouseDown: 'mousedown',
  /** 鼠标在地图上单击抬起时触发 */
  onContextMenu:'contextmenu',
  /** 开始拖拽地图时触发 */
  onDragStart: 'dragstart',
  /** 拖拽地图过程中触发 */
  onDragging: 'dragging',
  /** 停止拖拽地图时触发。如地图有拖拽缓动效果，则在拽停止，缓动开始前触发 */
  onDragEnd: 'dragend',
}
