import React from 'react';
import { LarkMap, RasterLayer } from '@pansy/lark-map';
import { useState } from 'react';
import { Button } from 'antd';

const data = {
  url: [
    'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    'https://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    'https://webst03.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    'https://webst04.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'
  ],
}
const layerOptions = {
  zIndex: 1,
}

const parser: any = {
  type: 'rasterTile',
  tileSize: 256,
  minZoom: 2,
  maxZoom: 18,
  zoomOffset: 0,
  // extent: [-180, -85.051129, 179, 85.051129],
}

export default () => {
  const [v, setV] = useState(true)
  return (
    <>
      <button onClick={() => { setV(v => !v) }}>{v ? 'hide' : 'show'}</button>
      <LarkMap mapType="GaodeV1" style={{ height: 300 }}>
        <RasterLayer {...data} {...layerOptions} parser={parser} visible={v} />
      </LarkMap>
    </>

  );
};
