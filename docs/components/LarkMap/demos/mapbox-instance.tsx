import { Mapbox } from '@antv/l7-maps';
import { LarkMap } from '@pansy/lark-map';

const mapInstance = new Mapbox({
  style: 'dark',
  center: [120.210792, 30.246026],
  pitch: 4,
  zoom: 10,
  rotation: 19,
});

export default () => {
  return (
    <LarkMap map={mapInstance} style={{ height: 400 }}>
      <h2 style={{ position: 'absolute', left: '10px', color: '#fff' }}>LarkMap</h2>
    </LarkMap>
  );
};
