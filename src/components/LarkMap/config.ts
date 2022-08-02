import type { Scene } from '@antv/l7';
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
  onMouseMove: 'mousemove',
  onMouseWheel:'mousewheel',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',
  onMouseUp: 'mouseup',
  onMouseDown: 'mousedown',
  onContextMenu:'contextmenu',
  onDragStart: 'dragstart',
  onDragging: 'dragging',
  onDragEnd: 'dragend',
}

export const setterMap = {
  style(val: string, ins: Scene) {
    if (ins && val) {
      ins.setMapStyle(val);
    }
  },
  zoom(val: number, ins: Scene) {
    if (ins && val) {
      ins.setZoom(val);
    }
  }
}


export const converterMap = {}
