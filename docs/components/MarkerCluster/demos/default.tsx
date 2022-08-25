
import React from 'react';
import { useState, useEffect } from 'react';
import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { LarkMap, MarkerCluster } from '@pansy/lark-map';

interface ServiceData {
  n: string;
  v: string;
  x: number;
  y: number;
}

export default () => {
  const [data, setData] = useState<ServiceData[]>(undefined)

  useEffect(()=>{
    fetch('https://gw.alipayobjects.com/os/basement_prod/67f47049-8787-45fc-acfe-e19924afe032.json')
      .then((res) => res.json())
      .then((list: ServiceData[]) => {
        setData(list);
      })
  }, []);

  return (
    <LarkMap mapType="GaodeV1" style={{ height: 500 }}>
      <MarkerCluster<ServiceData>
        data={data}
        render={
          <Avatar
            style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
            icon={<AntDesignOutlined />}
          />
        }
        renderCluster={({ properties }) => {
          return (
            <Avatar
              style={{ backgroundColor: '#87d068' }}
            >
              {properties.point_count}
            </Avatar>
          )
        }}
        getLat={(item) => item.y}
        getLng={(item) => item.x}
        onClick={(item) => {
          console.log(item);
        }}
      />
    </LarkMap>
  );
};
