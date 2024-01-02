import React from 'react';
import { Map } from 'mapbox-gl';
import { LarkMap } from '@pansy/lark-map';

const getMapInstance = (container) => {
  return Promise.resolve(import('@antv/l7')).then(({ Mapbox }) => {
    return new Mapbox({
      mapInstance: new Map({
        container: container,
        accessToken: 'pk.eyJ1IjoienQyMDIzMTEwOSIsImEiOiJjbG9xdGgxcDMwbDAyMmpwODVrNG5seXphIn0.1xKSk8Ll-80kkEwtzfLWhw',
      })
    })
  });
}

const Example: React.FC = () => {
  return (
    <LarkMap map={getMapInstance} style={{ height: 500 }} />
  )
};

export default Example;
