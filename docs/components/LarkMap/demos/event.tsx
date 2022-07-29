import { message } from 'antd'
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

export default () => {
  return (
    <LarkMap
      {...config}
      style={{ height: 400 }}
      onClick={(e) => {
        // @ts-ignore
        message.success(`经纬度坐标： ${e.lnglat.lng},${e.lnglat.lat}`)
      }}
    >
      <h2 style={{ position: 'absolute', left: '10px' }}>LarkMap</h2>
    </LarkMap>
  );
}
