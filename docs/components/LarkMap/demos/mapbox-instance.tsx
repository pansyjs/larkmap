
import { LarkMap, useScene } from '@pansy/lark-map';
import { useEffect } from 'react';
export default () => {
  const Test = () => {
    const scene = useScene()
    const map: any = scene.map

    useEffect(() => {
      if (!scene) return
      scene.on('load', () => {
        map.addSource('mapbox-dem', {
          'type': 'raster-dem',
          'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
          'tileSize': 512,
          'maxzoom': 10
        });
        // 给个夸张
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
        // 加个雾
        map.setFog({
          'horizon-blend': 0.3,
          'color': '#f8f0e3',
          'high-color': '#add8e6',
          'space-color': '#d8f2ff',
          'star-intensity': 0.0
        });
      })

    }, [scene])

    return (<></>)
  }
  return (

    <LarkMap mapType='MapboxV2' style={{ height: 400 }} mapOptions={{
      style: 'mapbox://styles/mapbox/satellite-streets-v11',
      token: 'your accesstoken'
    }}>
      <h2 style={{ position: 'absolute', left: '10px', color: '#fff' }}>LarkMap</h2>
      <Test></Test>
    </LarkMap>

  );
};
