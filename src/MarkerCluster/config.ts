import { Marker } from '@antv/l7';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';

import { MarkerLayer } from '@antv/l7';
import type { MarkerClusterProps } from './types';

export const setterMap = {
  data(val: any[] = [], ins: MarkerLayer, props: MarkerClusterProps) {
    if (!ins) return;

    if (ins.getMarkers().length > 0) {
      ins.clear();
    }

    if (isArray(val) && val.length) {
      val.forEach(item => {
        const lng = props?.getLng(item) ?? item.lngLat.lng;
        const lat = props?.getLat(item) ?? item.lngLat.lat;
        if (!isNil(lng) && !isNil(lat)) {
          const marker = new Marker({
            extData: item,
          }).setLnglat({
            lng,
            lat
          });
          ins.addMarker(marker);
        }
      });
    }
  }
}

export const converterMap = {}
