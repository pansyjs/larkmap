import React, { useRef, useImperativeHandle, useMemo, useEffect, forwardRef } from 'react';
import classNames from '@pansy/classnames';
import { useUpdate } from '@pansy/react-hooks';
import { Mapbox, Scene } from '@antv/l7';
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
    if (mapType == 'MapboxV2') {
      //@ts-ignore
      Promise.resolve(import('!mapbox-gl')).then((mapboxgl) => {
        return new mapboxgl.Map({
          accessToken: mapOptions.token,
          container: containerRef.current as HTMLDivElement,
          ...mapOptions,
          projection: mapOptions?.projection || 'globe',
          //@ts-ignore
          transformRequest:(url, resourceType) => {
            let isSensoroSource=false
            Array.isArray(mapOptions?.SensoroTiles)&&mapOptions?.SensoroTiles.forEach((v)=>{
              if(url.includes(v))isSensoroSource=true
            })
            if (resourceType === 'Tile' && isSensoroSource) {
                return {
                    url: url,
                    headers: { 'Authorization': mapOptions?.Authorization},
                };
            }
        }

        })
      }).then((mapInstance) => {
        if (!isMounted) {
          return;
        }
        mapInstance.on('style.load', () => {
          mapInstance.setFog({
            color: 'rgb(186, 210, 235)',
            'high-color': 'rgb(36, 92, 223)',
            'horizon-blend': 0.02,
            'space-color': 'rgb(11, 11, 25)',
            'star-intensity': 0.6,
          })
        })
        mapInstance.once('idle', () => {
          scene = new Scene({
            ...sceneConfig,
            id: containerRef.current as HTMLDivElement,
            map: new Mapbox({
              mapInstance: mapInstance
            }),
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

      })

    } else {
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
    }



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
  mapType: 'Mapbox',
  logoVisible: false,
  mapOptions: {},
};

export { LarkMapContext }
