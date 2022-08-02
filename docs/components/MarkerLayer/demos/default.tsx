
import { LarkMap,MarkerLayer} from '@pansy/lark-map';
import { feature } from '@turf/helpers';
import { Feature, FeatureCollection } from 'geojson';
import { useState,useEffect } from 'react';


export default () => {

  const [v,setV]=useState(true)
  const [data,setData]=useState<FeatureCollection>(undefined)

  useEffect(()=>{
    fetch('https://gw.alipayobjects.com/os/basement_prod/d3564b06-670f-46ea-8edb-842f7010a7c6.json').then(res=>res.json()).then( nodes =>{
      setData(nodes)
    })
  },[])  
  const clusterOption={
    radius: 100,
    maxZoom: 18,
    minZoom: 3

  }
  const elSingele=()=>{
      const el=document.createElement('label')
      el.textContent = '自定义样式';
      return el
  }
  const elMulti=(count:number)=>{
    const el=document.createElement('label')
    el.textContent = count.toString();
    return el
  }

  const option={
    cluster:true,
    clusterOption:clusterOption,
    // zoomOnClick:false,
    events:(feature:Feature)=>{
      console.log(feature)
    },
    render:elSingele,
    renderCluster:elMulti
    
  }

  return (
    <>
     <LarkMap mapType="Mapbox" style={{ height: 1300 }}>
    <MarkerLayer {...option} data={data} ></MarkerLayer>
    </LarkMap>
    </>
   
  );
};
