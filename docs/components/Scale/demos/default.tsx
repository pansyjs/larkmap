import { LarkMap, Scale } from '@pansy/lark-map';

export default () => {
  return (
    <LarkMap mapType="GaodeV1" style={{ height: 300 }}>
      <Scale position="bottomleft" />
    </LarkMap>
  );
};
