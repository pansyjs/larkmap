import { useEffect, useRef } from 'react';
import { RasterLayer as L7RasterLayer } from '@antv/l7';

import { useScene } from '@/hooks/useScene';

import type { FC } from 'react';
import type { RasterLayerProps } from './types';

export const RasterLayer: FC<RasterLayerProps> = ({ url, parser, style, ...rest }) => {
  const scene = useScene();
  const rasterRef = useRef<L7RasterLayer>();

  useEffect(
    () => {
      const raster = new L7RasterLayer(rest);

      raster.source(url, {
        parser,
      } as any);

      if (style) {
        raster.style(style)
      }

      scene.addLayer(raster);

      rasterRef.current = raster;

      return () => {
        rasterRef.current = undefined;
        rasterRef.current && scene.removeLayer(rasterRef.current);
      };
    },
    []
  );

  return null;
}
