import { LarkMap, Zoom, } from '@pansy/lark-map';

export default () => {
  return (
    <LarkMap mapType="GaodeV1" style={{ height: 300 }}>
      <Zoom position="bottomright" />
    </LarkMap>
  );
};
