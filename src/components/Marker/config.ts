import type { Marker, ILngLat } from '@antv/l7';
import type { EventMapping, } from './types';

export const events: EventMapping = {
  onClick: 'click',
  onMoveStart: 'mousedown',
  onMouseUp: 'mouseup',
  onDoubleClick: 'dblclick',
  onContextMenu: 'contextmenu',
  onMouseOver: 'mouseover',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
}

export const setterMap = {
  lngLat(val: ILngLat, ins: Marker) {
    if (ins && val) {
      ins.setLnglat(val);
    }
  },
}

export const converterMap = {}
