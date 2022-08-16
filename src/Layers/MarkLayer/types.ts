import { Events } from "@/components/LarkMap/types";
import { IMarkerLayerOption } from "@antv/l7-component";
import {  FeatureCollection } from "geojson";

export interface MarkerLayerProps extends Partial<IMarkerLayerOption>{
    /**
     * 聚合点数据 geojson格式
     */
    data?:FeatureCollection,
    /**
     * 点击聚合时，是否散开
     * @default true
     */
    zoomOnClick?:boolean,
    /**
     * 可以绑定的点击事件
     */
    events?:(...args: any[]) => any
    /**
     * 渲染样式设置
     */
    renderCluster?:any
    
    render?:any


}