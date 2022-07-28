
import { LarkMap,ClusterLayer} from '@pansy/lark-map';
import { useState,useEffect } from 'react';

const theOptions = {
  autoFit: true,
  shape: 'circle',
  size:{
    field:'point_count',
    value:[ 5, 10, 15, 20, 25],
    scale: { type: 'quantile' },
  },
  active:true,
  color:'rgb(73,167,86)',
  style:{
    opacity: 1,
    strokeWidth: 1,
    stroke: '#fff'
  }
}
const textOptions={
  autoFit: false,
  shape: {
    field:'point_count',
    value:'text'
  },
  size:15,
  active:true,
  color:'#fff',
  style:{
    opacity: 1,
    strokeWidth: 0,
    stroke: '#fff'
  }
}

export default () => {
  const [theSource,setTheSource]=useState(null)
  
  useEffect(()=>{
    fetch('https://gw.alipayobjects.com/os/bmw-prod/87e40417-a5da-4fdb-8313-c796ea15f982.csv').then(res => res.text())
      .then(data => {
        const source = {
          data,
          parser: {
            type: 'csv',
            x: 'lng',
            y: 'lat'
          },
        }
        setTheSource(source)
      })

  },[])
  return (
    <LarkMap mapType="GaodeV1" style={{ height: 300 }}>
      <ClusterLayer source={theSource} {...theOptions}></ClusterLayer>
      <ClusterLayer source={theSource} {...textOptions}></ClusterLayer>
    </LarkMap>
  );
};
