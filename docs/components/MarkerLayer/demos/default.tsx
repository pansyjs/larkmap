
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
    element:(feature:Feature)=>{
      const count=feature.properties.point_count
      if(count>1){
        const el = document.createElement("label");
        el.textContent =count;
        el.addEventListener('click',()=>{
          console.log(feature)
        })
        return el;
        
      }else{
        const el = document.createElement("label");
        el.textContent = '自定义样式';
        el.addEventListener('click',()=>{
          console.log(feature)
        })
        return el;
      }
    },
    radius: 100,
    maxZoom: 18,
    minZoom: 3

  }
  const option={
    cluster:true,
    clusterOption:clusterOption
  }

  return (
    <>
     <LarkMap mapType="Mapbox" style={{ height: 300 }}>
    <MarkerLayer {...option} data={data}></MarkerLayer>
    </LarkMap>
    </>
   
  );
};
