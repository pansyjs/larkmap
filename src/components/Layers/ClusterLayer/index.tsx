import { PointLayer as L7PointLayer } from '@antv/l7-composite-layers';
import { forwardRef, memo, useImperativeHandle } from 'react';
import { useCreateLayer } from '../../../hooks/layers/use-create-layer';
import type { ClusterLayerProps } from './types';

export const ClusterLayer = memo(
  forwardRef<L7PointLayer, ClusterLayerProps>((props, ref) => {
    props.source.cluster=true
    const layerRef = useCreateLayer<L7PointLayer, ClusterLayerProps>(L7PointLayer, props);

    useImperativeHandle(ref, () => layerRef.current);

    return null;
  }),
);
