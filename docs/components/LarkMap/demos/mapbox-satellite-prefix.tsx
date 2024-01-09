
import { LarkMap, useScene } from '@pansy/lark-map';
export default () => {
    const Test = () => {
        const scene = useScene()
        const map: any = scene.map

        return null
    }
    return (

        <LarkMap mapType='MapboxV2' style={{ height: 400 }} mapOptions={{
            mapboxSatellitePrefix: 'your prefix',
            style: 'your style',
            zoom: 2,
            center: [111.268338, 30.69343],
            token: 'your token',

        }}>
            <h2 style={{ position: 'absolute', left: '10px', color: '#fff' }}>LarkMap</h2>
            <Test></Test>
        </LarkMap>

    );
};
