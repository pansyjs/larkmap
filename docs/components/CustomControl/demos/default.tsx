import { CustomControl, LarkMap } from '@pansy/lark-map';
import React from 'react';

export default () => (
  <LarkMap mapType="GaodeV1" style={{ height: '300px' }}>
    <CustomControl className="myCustomControl" position="topleft">
      <h2>自定义控件</h2>
    </CustomControl>
  </LarkMap>
);
