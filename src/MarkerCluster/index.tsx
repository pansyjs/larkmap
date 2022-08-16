import { useContext, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MarkerLayer } from '@antv/l7';
import { useUpdate } from '@pansy/react-hooks';

import { LarkMapContext } from '@/LarkMap';
import { usePropsReactive } from '@/hooks/usePropsReactive';
import { renderMarker, renderCluster } from './utils';
import { setterMap, converterMap } from './config';

import type { PropsWithChildren } from 'react';
import type { MarkerLayerOption, MarkerClusterProps, LngLat, ClusterElementArgs } from './types';

function InternalMarkerCluster<D extends { lngLat: LngLat } = any>(
  props: MarkerClusterProps<D>,
  ref: React.MutableRefObject<MarkerLayer>,
): null {
  const update = useUpdate();
  const { scene } = useContext(LarkMapContext);
  const cluster = useRef<MarkerLayer>(null);

  const { onInstanceCreated } = usePropsReactive(props, cluster, {
    setterMap,
    converterMap,
  });

  useEffect(
    () => {
      createInstance().then((ins) => {
        cluster.current = ins;

        onInstanceCreated();
        scene.addMarkerLayer(ins);
        update();
      });
    },
    []
  );

  useImperativeHandle(ref, () => cluster.current, []);

  const createInstance = () => {
    return new Promise<MarkerLayer>((resolve) => {
      const opts = createOptions();

      resolve(new MarkerLayer({
        cluster: true,
        ...opts,
      }));
    });
  }

  const createOptions = () => {
    const options: Partial<MarkerLayerOption> = {};

    if (!options.clusterOption) {
      options.clusterOption = {};
    }

    options.clusterOption.element = (args: ClusterElementArgs) => {
      let el = document.createElement('div');

      if (!args.properties.cluster) {
        renderMarker(el, props.render, args);
      }

      if (args?.properties?.point_count > 1) {
        renderCluster(el, props.renderCluster, args);
      }

      return el;
    }

    return options;
  };

  return null;
}

const ForwardMarkerCluster = forwardRef(InternalMarkerCluster) as <D extends { lngLat: LngLat } = any>(
  props: PropsWithChildren<MarkerClusterProps<D>> & { ref?: React.Ref<MarkerLayer> },
) => React.ReactElement;

type InternalMarkerClusterType = typeof ForwardMarkerCluster;

interface MarkerClusterInterface extends InternalMarkerClusterType {
  defaultProps?: Partial<MarkerClusterProps<any>>;
}

export const MarkerCluster = ForwardMarkerCluster as MarkerClusterInterface;

MarkerCluster.defaultProps = {
  cluster: true,
}

export default MarkerCluster;
