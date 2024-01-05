
import { LarkMap, useScene } from '@pansy/lark-map';
export default () => {
  const Test = () => {
    const scene = useScene()
    const map: any = scene.map

    return (<></>)
  }
  return (

    <LarkMap mapType='MapboxV2' style={{ height: 400 }} mapOptions={{
      mapboxStylePrefix:'your prefix',
      style: 'your style type',
      zoom: 11,
      center: [111.268338, 30.69343],
      token: 'your accessToken',

    }}>
      <h2 style={{ position: 'absolute', left: '10px', color: '#fff' }}>LarkMap</h2>
      <Test></Test>
    </LarkMap>

  );
};
