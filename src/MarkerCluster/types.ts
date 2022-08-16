import { IMarkerLayerOption } from '@antv/l7';

import type { MarkerOption } from '../Marker/types';

export interface MarkerClusterProps<ExtData = any> extends Partial<IMarkerLayerOption> {
  data?: MarkerOption<ExtData>[];
}
