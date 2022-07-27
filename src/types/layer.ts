export interface LayerCommonProps<T> {
    /** 图层初始化完成后回调，用于获取 layer 对象   */
    onCreated?: (layer: T) => void;
  }