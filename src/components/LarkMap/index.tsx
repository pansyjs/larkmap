import { useRef, useImperativeHandle, useMemo, useEffect, useState, forwardRef, createContext } from 'react';
import classNames from '@pansy/classnames';
import { Scene } from '@antv/l7';

import { LayerManager } from '@/utils';
import { useEvents } from '@/hooks/useEvents';
import { usePropsReactive } from '@/hooks/usePropsReactive';
import { createMap } from './helper';
import { events, setterMap, converterMap, } from './config';

import type { CSSProperties } from 'react';
import type { LarkMapRefAttributes, LarkMapProps, LarkMapContextValue, EventMapping } from './types';

export const LarkMapContext = createContext<LarkMapContextValue>(null);

export const LarkMap = forwardRef<LarkMapRefAttributes, LarkMapProps>((props, ref) => {
  const {
    style,
    className,
    map,
    mapType,
    mapOptions = {},
    onLoaded,
    children,
    ...sceneConfig
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const [sceneInstance, setSceneInstance] = useState<Scene>();
  const { current: contextValue } = useRef<LarkMapContextValue>({ scene: null, layerManager: null });

  usePropsReactive(mapOptions, sceneInstance, {
    setterMap,
    converterMap,
  });
  useEvents<Scene, EventMapping>(sceneInstance, events, props);

  useEffect(() => {
    let scene: Scene;
    let isMounted = true;

    if (!containerRef.current) return null;

    Promise.resolve(map || createMap(mapType, mapOptions))
      .then((mapInstance) => {
        if (!isMounted) {
          return;
        }

        scene = new Scene({
          ...sceneConfig,
          id: containerRef.current as HTMLDivElement,
          map: mapInstance,
        });

        // @ts-ignore
        const layerManager = new LayerManager({ scene });

        contextValue.scene = scene;
        contextValue.layerManager = layerManager;

        scene.once('loaded', () => {
          if (onLoaded) {
            onLoaded(scene);
          }
          setSceneInstance(scene);
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
      getScene: () => sceneInstance,
      getMap: () => sceneInstance.map
    }),
    [sceneInstance]
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
      {sceneInstance && <LarkMapContext.Provider value={contextValue}>{children}</LarkMapContext.Provider>}
    </div>
  );
});

LarkMap.defaultProps = {
  mapType: 'Mapbox',
  logoVisible: false,
  mapOptions: {},
};
