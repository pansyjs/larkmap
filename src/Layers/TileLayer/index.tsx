import { useEffect, useRef } from 'react';
import { useUpdateEffect } from '@pansy/react-hooks';
import { RasterLayer as L7RasterLayer } from '@antv/l7';

import { useScene } from '@/hooks/useScene';

import type { FC } from 'react';
import type { TileLayerProps } from './types';

export const TileLayer: FC<TileLayerProps> = (props) => {
  const { zIndex,url,parser,visiable} = props;
  const scene = useScene();
  const rasterLayerRef = useRef<L7RasterLayer>();

  useEffect(() => {
    const rasterLayer = new L7RasterLayer({
      zIndex:zIndex
    });
    rasterLayer.source(url,{
      parser: parser
    })
    rasterLayerRef.current = rasterLayer;
    scene.addLayer(rasterLayer);
    return () => {
      rasterLayerRef.current = undefined;
      scene.removeLayer(rasterLayer);
    };
  }, []);

  //更新图层Layer
  useUpdateEffect(() => {
    if (rasterLayerRef.current) {
      rasterLayerRef.current.setIndex(zIndex)
    }
  }, [zIndex]);

  useUpdateEffect(() => {
    if (rasterLayerRef.current) {
      visiable?rasterLayerRef.current.show(): rasterLayerRef.current.hide()
    }
  }, [visiable]);



  return null;
}
