import { IRasterLayerStyleOptions } from "@antv/l7"

/**
 * 组件类型定义
 */
export interface RasterLayerProps extends Partial<IRasterLayerStyleOptions>  {
  //瓦片地址
  url: string[],
  parser: {
    /*
     * 用于指定瓦片服务的解析方式
     * rasterTile 用于栅格瓦片的解析，mvt 用于矢量瓦片的解析。
     */
    type?: 'rasterTile' | 'mvt',
    /**
     * 区分图片栅格和数据栅格
     * 值为 image 和 arraybuffer，默认为 image。
     */
    dataType?: 'image' | 'arraybuffer';
    /**
     * 瓦片大小
     * @default 256
     */
    tileSize?: number,
    /** 设置瓦片数据的请求层级 */
    minZoom?: number,
    /** 设置瓦片数据的请求层级 */
    maxZoom?: number,
    /** 瓦片数据的边界 */
    extent?: number[],
    /** 数据栅格支持额外的 format 参数用于解析栅格数据， */
    format?: (...any: any[]) => any;
    /** 改变请求的瓦片数据的层级 */
    zoomOffset?: number
  },
  /** 图层层级 */
  zIndex?:number,
  /** 是否可见 */
  visiable?: boolean,
}


