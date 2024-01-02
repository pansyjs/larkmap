import { GaodeMap, Map } from '@antv/l7';

import type { IMapConfig } from '@antv/l7';
import type { LarkMapProps } from './types';

export const createMap = async (mapType: LarkMapProps['mapType'], mapOptions: Partial<IMapConfig> = {}) => {
  if (mapType === 'Map') {
    return new Map(mapOptions);
  }

  /** 高德地图 - 不再支持 V1 */
  if (mapType === 'Gaode') {
    return new GaodeMap(mapOptions);
  }

  /** 腾讯地图 */
  if (mapType === 'Tencent') {
    return Promise.resolve(import('@antv/l7')).then(({ TencentMap }) => {
      return new TencentMap(mapOptions);
    });
  }

  /** 百度地图 */
  if (mapType === 'Baidu') {
    return Promise.resolve(import('@antv/l7')).then(({ BaiduMap }) => {
      return new BaiduMap(mapOptions);
    });
  }

  /** Mapbox */
  return Promise.resolve(import('@antv/l7')).then(({ Mapbox }) => {
    return new Mapbox(mapOptions);
  });
}
