import type { IRasterLayerStyleOptions as RasterLayerStyleOptions } from '@antv/l7';

export interface RasterLayerOptions {
  /** 栅格瓦片图层是否可以在初始化的时候配置瓦片的掩模 */
  mask?: boolean;
  maskfence?: any;
  /** 图层层级 */
  zIndex?: number,
  /** 是否可见 */
  visible?: boolean
}

export type ParserType = 'rasterTile' | 'mvt';

export type ParserDataType = 'image' | 'arraybuffer';

export interface ParserFormatResult {
  rasterData: any,
  width?: number,
  height?: number,
}

export interface SourceParser {
  /*
   * 指定瓦片服务的解析方式
   * rasterTile 用于栅格瓦片的解析，mvt 用于矢量瓦片的解析。
   */
  type?: ParserType;
  /*
   * 区分图片栅格和数据栅格
   * 值为 image 和 arraybuffer，默认为 image。
   */
  dataType?: ParserDataType;
  /*
   * 瓦片大小
   * @default 256
   */
  tileSize?: number;
  /**
   * 设置瓦片数据的最小层级
   * @default -Infinity
   * */
  minZoom?: number;
  /**
   * 设置瓦片数据的最大层级
   * @default Infinity
   * */
  maxZoom?: number;
  /** 瓦片数据的边界 */
  extent?: [number, number, number, number];
  /** 数据栅格支持额外的 format 参数用于解析栅格数据， */
  format?: (data: any) => ParserFormatResult;
  /** 改变请求的瓦片数据的层级 */
  zoomOffset?: number;
}

/**
 * 组件类型定义
 */
export interface RasterLayerProps extends Partial<RasterLayerOptions>  {
  /** 数据地址 */
  url: string[] | string;
  /** 栅格瓦片在 parser 中解析瓦片服务，配置瓦片的参数。 */
  parser: SourceParser;
  /** 样式参数 */
  style?: RasterLayerStyleOptions;
}

export { RasterLayerStyleOptions }
