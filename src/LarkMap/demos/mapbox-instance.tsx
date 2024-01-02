
import { LarkMap, useScene } from '@pansy/lark-map';
import { useEffect } from 'react';
export default () => {
  const Test = () => {
    const scene = useScene()
    const map: any = scene.map

    useEffect(() => {
      if (!scene) return
      map.addSource('sensoro-poi', {
        'type': 'vector',
        'tiles': [
          'https://lins-dev1-api.sensoro.com' + '/gis/v1/poi/vector/{z}/{x}/{y}.pbf'
        ],
        'minzoom': 11,
        'maxzoom': 20
      });
      map.addLayer({
        id: 'sensoro-poi',
        type: 'circle',
        source: 'sensoro-poi',
        "source-layer": "poi_mvt",
        paint: {
          'circle-color': '#1ACB7C',
          'circle-radius': 4,
          'circle-stroke-width': 1,
          'circle-stroke-color': '#fff',
        },
      },
        'road-label-simple');

    }, [scene])

    return (<></>)
  }
  return (

    <LarkMap mapType='MapboxV2' style={{ height: 400 }} mapOptions={{
      style: 'mapbox://styles/mapbox/light-v11',
      zoom: 11,
      center: [111.268338, 30.69343],
      token: 'your token',
      SensoroTiles: [
        '/gis/v1/poi/vector/'
      ],
      Authorization: 'Bearer xxxx'

    }}>
      <h2 style={{ position: 'absolute', left: '10px', color: '#fff' }}>LarkMap</h2>
      <Test></Test>
    </LarkMap>

  );
};
