import { LarkMap } from '@pansy/lark-map';

import type { LarkMapProps } from '@pansy/lark-map';

const config: LarkMapProps = {
  mapType: 'GaodeV1',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 9,
  },
};

export default () => (
  <LarkMap {...config} style={{ height: '400px' }}>
    <h2 style={{ position: 'absolute', left: '10px' }}>LarkMap</h2>
  </LarkMap>
);
