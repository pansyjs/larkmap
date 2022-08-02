import { useEffect, useRef } from 'react';
import { IMarkerStyleOption, MarkerLayer as L7MarkerLayer } from '@antv/l7-component'
import { Marker } from '@antv/l7';
import { useScene } from '@/hooks/useScene';

import type { FC } from 'react';
import type { MarkerLayerProps } from './types';
import { Feature } from '@turf/helpers';

export const MarkerLayer: FC<MarkerLayerProps> = (props) => {

    const scene = useScene();
    const MarkerLayerRef = useRef<L7MarkerLayer>();
    const { cluster, clusterOption, data, events, renderCluster, render, zoomOnClick = true } = props

    //层级下钻
    const drilling=(feature:Feature)=>{
        //console.log(feature.geometry?.coordinates)
        const coor=feature.geometry?.coordinates
        coor&&scene.setCenter(coor)
        scene.zoomIn()

    }
    if (render && renderCluster) {
    clusterOption.element=(feature)=>{
      const count=feature.properties.point_count
      if(count>1){
        const el = renderCluster(count)
        events&&el.addEventListener('click',()=>{
          events(feature)
          zoomOnClick&&drilling(feature)
        })
        return el;
        
      }else{
        const el = render()
        events&&el.addEventListener('click',()=>{
            events(feature)
          })
        return el;
      }
    }
    }

    useEffect(() => {
        const markerLayer = new L7MarkerLayer({
            cluster: true,
            clusterOption: {
                ...clusterOption,
            }
        });
        MarkerLayerRef.current = markerLayer
        scene.addMarkerLayer(markerLayer);
        return () => {
            scene.removeMarkerLayer(MarkerLayerRef.current);
            MarkerLayerRef.current = undefined;
        }
    }, [])

    useEffect(() => {
        if (MarkerLayerRef.current) {
            scene.removeMarkerLayer(MarkerLayerRef.current);
            MarkerLayerRef.current = undefined;
            const markerLayer = new L7MarkerLayer({
                cluster,
                clusterOption: {
                    ...clusterOption
                }
            });
            if (data) {
                for (let i = 0; i < data.features.length; i++) {
                    const { coordinates } = data.features[i].geometry as any;
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
    }, [data])





    return null;
}
