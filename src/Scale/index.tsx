import { Scale as L7Scale } from '@antv/l7';
import { useUpdateEffect } from '@pansy/react-hooks';
import { memo, useEffect, useRef } from 'react';
import { useScene } from '@/hooks/useScene';

import type { ScaleProps } from './types';

export const Scale = memo<ScaleProps>((props) => {
  const scene = useScene();
  const scaleRef = useRef<L7Scale>();
  const { position } = props;

  useEffect(() => {
    const scale = new L7Scale({
      ...props,
    });
    scaleRef.current = scale;
    scene.addControl(scale);
    return () => {
      scaleRef.current = undefined;
      scene.removeControl(scale);
    };
  }, []);

  useUpdateEffect(() => {
    if (scaleRef.current) {
      //@ts-ignore
      scaleRef.current.setPosition(position);
    }
  }, [position]);

  return null;
});
