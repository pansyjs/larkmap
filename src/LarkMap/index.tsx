import React, { useRef, useImperativeHandle, useMemo, useEffect, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import { isUndefined, isFunction } from '@pansy/shared';
import { useUpdate } from '@pansy/react-hooks';
import { Scene } from '@antv/l7';
import { LayerManager } from '@/utils';
import { useEvents } from '@/hooks/useEvents';
import { usePropsReactive } from '@/hooks/usePropsReactive';
import { createMap } from './helper';
import { LarkMapContext } from './context';
import { events, setterMap, converterMap, } from './config';

import type { CSSProperties } from 'react';
import type { LarkMapRefAttributes, LarkMapProps, LarkMapContextValue, EventMapping } from './types';

export const LarkMap = forwardRef<LarkMapRefAttributes, LarkMapProps>((props, ref) => {
  const {
    style,
    className,
    id,
    map,
    mapType,
    mapOptions = {},
    onLoaded,
    children,
    ...sceneConfig
  } = props;
  const update = useUpdate();
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<Scene>();
  const { current: contextValue } = useRef<LarkMapContextValue>({ scene: null, layerManager: null });

  usePropsReactive(mapOptions, sceneRef, {
    setterMap,
    converterMap,
  });
  useEvents<Scene, EventMapping>(sceneRef.current, events, props);

  useEffect(() => {
    let scene: Scene;
    let isMounted = true;

    if (!containerRef.current) return null;
    const callback = isUndefined(map)
      ? createMap(mapType, mapOptions)
      : isFunction(map) ? map(containerRef.current) : map;

    Promise.resolve(callback)
      .then((mapInstance) => {
        if (!isMounted) {
          return;
        }
        scene = new Scene({
          ...sceneConfig,
          id: containerRef.current as HTMLDivElement,
          map: mapInstance,
        });

        const layerManager = new LayerManager({ scene });

        contextValue.scene = scene;
        contextValue.layerManager = layerManager;

        scene.once('loaded', () => {
          if (onLoaded) {
            onLoaded(scene);
          }
          sceneRef.current = scene;
          update();
        });
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
      if (scene) {
        contextValue.scene = null;
        contextValue.layerManager = null;
        scene.destroy();
      }
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      getScene: () => sceneRef.current,
      getMap: () => sceneRef.current.map
    }),
    [sceneRef]
  );

  const styles: CSSProperties = useMemo(
    () => ({
      position: 'relative',
      width: '100%',
      height: '100%',
      ...style,
    }),
    [style],
  );

  return (
    <div ref={containerRef} style={styles} className={classNames('larkmap', className)}>
      {sceneRef.current && <LarkMapContext.Provider value={contextValue}>{children}</LarkMapContext.Provider>}
    </div>
  );
});

LarkMap.defaultProps = {
  mapType: 'Gaode',
  logoVisible: false,
  mapOptions: {},
};

export { LarkMapContext }
