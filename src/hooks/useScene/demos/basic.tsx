import React, { useEffect } from 'react';
import { LarkMap, useScene } from '@pansy/lark-map';

import type { LarkMapProps } from '@pansy/lark-map';

const config: LarkMapProps = {
  mapOptions: {
    token: '0dc7ed53afe8e83b31e0f36c3e5859b0'
  }
};

const ChildComponent = () => {
  const scene = useScene();

  useEffect(() => {
    scene.setZoom(12);
  }, []);

  return null;
};

export default () => (
  <LarkMap {...config} style={{ height: 300 }}>
    <ChildComponent />
  </LarkMap>
);
