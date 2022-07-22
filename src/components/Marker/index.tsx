import { Marker as L7Marker } from '@antv/l7';
import { useDeepCompareEffect } from '@pansy/react-hooks';
import { memo, useEffect, useMemo, useRef, Children } from 'react';
import { createPortal } from 'react-dom';
import { useScene } from '@/hooks/useScene';
import type { MarkerProps } from './types';

export const Marker = memo<MarkerProps>((props): React.ReactPortal => {
  const scene = useScene();
  const thisRef = useRef({ props });
  thisRef.current.props = props;

  const marker = useMemo(() => {
    let hasChildren = false;
    Children.forEach(props.children, (el) => {
      if (el) {
        hasChildren = true;
      }
    });
    const options = {
      ...props,
      element: hasChildren ? document.createElement('div') : null,
    };
    // @ts-ignore
    const l7marker = new L7Marker(options);

    l7marker.on('click', (e: MouseEvent) => {
      thisRef.current.props.onClick?.(e);
    });

    return l7marker;
  }, []);

  useDeepCompareEffect(() => {
    marker.setLnglat(props.lngLat);
  }, [props.lngLat]);

  useEffect(() => {
    scene.addMarker(marker);
    return () => {
      marker.remove();
    };
  }, []);

  return createPortal(props.children, marker.getElement());
});
