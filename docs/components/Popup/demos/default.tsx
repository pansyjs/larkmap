import { LarkMap, Popup } from '@pansy/lark-map';
import { useState } from 'react';

export default () => {
  const [lngLat, setLngLat] = useState({ lng: 120.210792, lat: 30.246026 });
  const onSceneLoaded = (scene: any) => {
    scene.on('mousemove', (e: any) => {
      const { lng, lat } = e.lnglat;
      setLngLat({ lng, lat });
    });
  };

  return (
    <LarkMap mapType="GaodeV1" style={{ height: 300 }} onSceneLoaded={onSceneLoaded}>
      <Popup lngLat={lngLat} closeButton={false} closeOnClick={false} anchor="bottom-left">
        <p>lat: {lngLat.lat}</p>
        <p>lng: {lngLat.lng}</p>
      </Popup>
    </LarkMap>
  );
};
