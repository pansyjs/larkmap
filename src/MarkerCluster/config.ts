import { Marker } from '@antv/l7';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import type { MarkerLayer } from '@antv/l7';

export const setterMap = {
  data(val: any[] = [], ins: MarkerLayer) {
    if (ins && isArray(val) && val.length) {
      val.forEach(item => {
        if (item.lngLat && !isNil(item.lngLat.lng) && !isNil(item.lngLat.lat)) {
          const marker = new Marker().setLnglat(item.lngLat);
          ins.addMarker(marker);
        }
      });
    }
  }
}

export const converterMap = {}
