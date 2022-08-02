import { useEffect, useRef } from 'react';
import { MarkerLayer as L7MarkerLayer} from '@antv/l7-component'
import { Marker, Point } from '@antv/l7';
import { useScene } from '@/hooks/useScene';

import type { FC } from 'react';
import type { MarkerLayerProps } from './types';

export const MarkerLayer: FC<MarkerLayerProps> = (props) => {

  const scene = useScene();
  const MarkerLayerRef = useRef<L7MarkerLayer>();
  const {cluster,clusterOption,data} =props
    useEffect(()=>{
        const markerLayer = new L7MarkerLayer({
            cluster,
            clusterOption
        });
        MarkerLayerRef.current = markerLayer
        scene.addMarkerLayer(markerLayer);
        return ()=>{
            scene.removeMarkerLayer(MarkerLayerRef.current);
            MarkerLayerRef.current = undefined;
        }
    },[])

    useEffect(()=>{
        if(MarkerLayerRef.current){
            // MarkerLayerRef.current.clear()
            scene.removeMarkerLayer(MarkerLayerRef.current);
            MarkerLayerRef.current = undefined;
            const markerLayer = new L7MarkerLayer({
                cluster,
                clusterOption
            });
            if(data){
                for (let i = 0; i < data.features.length; i++) {
                    const { coordinates } = data.features[i].geometry as any ;
                    const marker = new Marker().setLnglat({
                        lng: coordinates[0],
                        lat: coordinates[1]
                    });
                    markerLayer.addMarker(marker);
                }
            }
            console.log(markerLayer)
            
            MarkerLayerRef.current = markerLayer
            scene.addMarkerLayer(markerLayer);
        }
    },[data])



 

  return null;
}
