import { IRasterLayerStyleOptions } from "@antv/l7"

/**
 * 组件类型定义
 */
export interface TileLayerProps extends   Partial<IRasterLayerStyleOptions>  {
    
    //瓦片地址
    url:string[],
    parser:{
        //瓦片类型 raster|vector
        type:string,
         //瓦片大小
        tileSize?:number,
         //缩放层级
        minZoom?:number,
        maxZoom?:number,
        //图层范围
        extent?:number[],
        //Zoom偏移
        zoomOffset?:number
    },
    //图层层级
    zIndex?:number,
    //是否可见
    visiable?:boolean,
}


