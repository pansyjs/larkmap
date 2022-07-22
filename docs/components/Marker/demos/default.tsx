import { LarkMap, Marker } from '@pansy/lark-map';

export default () => (
  <LarkMap mapType="GaodeV1" style={{ height: 500 }}>
    <Marker lngLat={{ lng: 120.104735, lat: 30.261121 }} />
    <Marker lngLat={{ lng: 120.210792, lat: 30.246026 }}>
      <div style={{ padding: 8, backgroundColor: 'pink' }}>杭州</div>
    </Marker>
  </LarkMap>
);
