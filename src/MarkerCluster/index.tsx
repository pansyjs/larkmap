import { useContext, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MarkerLayer } from '@antv/l7';

import { LarkMapContext } from '../LarkMap';
import { MarkerClusterProps } from './types';

export const MarkerCluster = forwardRef<MarkerLayer, MarkerClusterProps>((props, ref) => {
  const { layerManager, scene } = useContext(LarkMapContext);
  const [markerLayerIns, setMarkerLayerIns] = useState<MarkerLayer>();

  useEffect(
    () => {
      const markerLayer = new MarkerLayer(props);

      // layerManager.addLayer(markerLayer);
      setMarkerLayerIns(markerLayer);
    },
    []
  );

  useImperativeHandle(ref, () => markerLayerIns, [])

  return null;
});

