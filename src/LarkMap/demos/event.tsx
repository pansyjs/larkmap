import { message } from 'antd'
import { LarkMap } from '@pansy/lark-map';

import type { LarkMapProps } from '@pansy/lark-map';

const config: LarkMapProps = {
  mapType: 'GaodeV1',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 9,
  },
};

export default () => {
  return (
    <LarkMap
      {...config}
      style={{ height: 400 }}
      onClick={(e) => {
        console.log(e);
        message.success(`经纬度坐标： ${e.lnglat.lng},${e.lnglat.lat}`)
      }}
      // onResize={(e) => {
      //   console.log(e);
      // }}
      // onMapMove={(e) => {
      //   console.log(e);
      // }}
      // onMoveStart={(e) => {
      //   console.log(e);
      // }}
      // onMoveEnd={(e) => {
      //   console.log(e);
      // }}
      // onZoomChange={(e) => {
      //   console.log(e);
      // }}
      // onZoomStart={(e) => {
      //   console.log(e);
      // }}
      // onZoomEnd={(e) => {
      //   console.log(e);
      // }}
      // onDoubleClick={(e) => {
      //   console.log(e);
      // }}
      // onMouseMove={(e) => {
      //   console.log(e);
      // }}
      // onMouseWheel={(e) => {
      //   console.log(e);
      // }}
      // onMouseOver={(e) => {
      //   console.log(e);
      // }}
      // onMouseOut={(e) => {
      //   console.log(e);
      // }}
      // onMouseUp={(e) => {
      //   console.log(e);
      // }}
      // onMouseDown={(e) => {
      //   console.log(e);
      // }}
      // onContextMenu={(e) => {
      //   console.log(e);
      // }}
      // onDragStart={(e) => {
      //   console.log(e);
      // }}
      // onDragging={(e) => {
      //   console.log(e);
      // }}
      // onDragEnd={(e) => {
      //   console.log(e);
      // }}
    />
  )
}
