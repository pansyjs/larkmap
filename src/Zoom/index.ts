import { useEffect, useRef } from 'react';
import { useUpdateEffect } from '@pansy/react-hooks';
import { Zoom as L7Zoom } from '@antv/l7';

import { useScene } from '@/hooks/useScene';

import type { FC } from 'react';
import type { ZoomProps } from './types';

export const Zoom: FC<ZoomProps> = (props) => {
  const { position } = props;

  const scene = useScene();
  const zoomRef = useRef<L7Zoom>();

  useEffect(() => {
    const zoom = new L7Zoom({
      ...props,
    });
    zoomRef.current = zoom;
    scene.addControl(zoom);

    return () => {
      zoomRef.current = undefined;
      scene.removeControl(zoom);
    };
  }, []);

  useUpdateEffect(() => {
    if (zoomRef.current) {
      zoomRef.current.setPosition(position);
    }
  }, [position]);


  return null;
}
