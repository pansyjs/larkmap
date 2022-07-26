import { useContext, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { MarkerLayer } from '@antv/l7';
import { useUpdate, useUnmount } from '@pansy/react-hooks';

import { LarkMapContext } from '@/LarkMap';
import { usePropsReactive } from '@/hooks/usePropsReactive';
import { renderMarker } from './utils';
import { setterMap, converterMap } from './config';

import type { PropsWithChildren } from 'react';
import type { MarkerLayerOption, MarkerClusterProps, LngLat, ElementArgs } from './types';

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

  useUnmount(() => {
    if (cluster.current) {
      cluster.current.clear();
      scene.removeMarkerLayer(cluster.current);
    }
  })

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

  const handleClick = (opts: ElementArgs<D>) => {
    const { disabledDrillDownMaxZoom } = props;
    // @ts-ignore;
    const centerZoom = scene.map.getZoom();

    if ('type' in opts) {
      if (disabledDrillDownMaxZoom && centerZoom > disabledDrillDownMaxZoom) {
        return;
      }

      const coor = opts.geometry?.coordinates;

      if (coor && coor.length === 2) {
        scene.setCenter(coor);
        scene.zoomIn()
      }
    }

    props.onClick?.(opts)
  }

  const createOptions = () => {
    const options: Partial<MarkerLayerOption> = {};

    if (!options.clusterOption) {
      options.clusterOption = {};
    }

    options.clusterOption.element = (args: ElementArgs<D>) => {
      let el = document.createElement('div');

      el.addEventListener('click', () => {
        handleClick(args)
      });

      // 支持绑定右键点击事件
      el.addEventListener('contextmenu', () => {
        props?.onContextMenu(args);
      });

      if ('type' in args && args.type === 'Feature') {
        props.renderCluster && renderMarker(el, props.renderCluster, args);
      } else {
        props.render && renderMarker(el, props.render, args);
      }

      return el;
    }

    return options;
  };

  return null;
}

const ForwardMarkerCluster = forwardRef(InternalMarkerCluster) as <D extends object = any>(
  props: PropsWithChildren<MarkerClusterProps<D>> & { ref?: React.Ref<MarkerLayer> },
) => React.ReactElement;

type InternalMarkerClusterType = typeof ForwardMarkerCluster;

interface MarkerClusterInterface extends InternalMarkerClusterType {
  defaultProps?: Partial<MarkerClusterProps<any>>;
}

export const MarkerCluster = ForwardMarkerCluster as MarkerClusterInterface;

MarkerCluster.defaultProps = {
  cluster: true,
  zoomOnClick: true,
}

export default MarkerCluster;
