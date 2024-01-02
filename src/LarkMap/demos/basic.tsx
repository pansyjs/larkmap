import React from 'react';
import { LarkMap } from '@pansy/lark-map';

import type { LarkMapProps } from '@pansy/lark-map';

const config: LarkMapProps = {
  mapType: 'Gaode',
  mapOptions: {
    style: 'light',
    token: '0dc7ed53afe8e83b31e0f36c3e5859b0',
    center: [120.210792, 30.246026],
    zoom: 9,
  },
};

const Example: React.FC = () => (
  <LarkMap {...config} style={{ height: 400 }} />
);

export default Example;
