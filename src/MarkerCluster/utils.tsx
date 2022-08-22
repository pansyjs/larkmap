import React from 'react';
import { render } from 'react-dom';
import { isFunction } from '@pansy/shared';

import type { MarkerClusterProps, ElementArgs, } from './types';

export const renderMarker = (
  ele: HTMLDivElement,
  markerRender: MarkerClusterProps['render'],
  args: ElementArgs,
) => {
  let child: string | React.ReactNode = markerRender;

  if (isFunction(markerRender)) {
    child = markerRender(args);
  }

  render(<>{child}</>, ele);
};
