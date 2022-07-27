import { Marker as L7Marker } from '@antv/l7';
import { memo, useEffect, useMemo, Children } from 'react';
import { createPortal } from 'react-dom';

import { useEvents } from '@/hooks/useEvents';
import { usePropsReactive } from '@/hooks/usePropsReactive';
import { useScene } from '@/hooks/useScene';
import { events, setterMap, converterMap, } from './config';

import type { MarkerProps, EventMapping } from './types';

export const Marker = memo<MarkerProps>((props): React.ReactPortal => {
  const scene = useScene();

  const marker = useMemo(() => {
    let hasChildren = false;
    Children.forEach(props.children, (el) => {
      if (el) {
        hasChildren = true;
      }
    });

    let element: null | HTMLDivElement = null;

    const options = {
      ...props,
      element,
    };
    const l7marker = new L7Marker(options);
    l7marker.setLnglat(options.lngLat);

    return l7marker;
  }, []);

  usePropsReactive(props, marker, {
    setterMap,
    converterMap,
  });
  useEvents<L7Marker, EventMapping>(marker, events, props);

  useEffect(() => {
    try {
      scene.addMarker(marker);
    } catch (error) {
      console.log(error);
    }

    return () => {
      marker.remove();
    };
  }, []);

  return createPortal(props.children, marker.getElement());
});
