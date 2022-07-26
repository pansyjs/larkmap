import { useUpdateEffect } from '@pansy/react-hooks';
import { useEffect, useRef } from 'react';

import type { Layer } from '@/utils/layerManager';
import type { LayerCommonProps } from '@/types/layer';

import { useLayerManager } from '../useLayerManager';

/**
 * LayerCtor 图层类 构造函数
 */
type LayerCtor<O, L> = new (options: O) => L;
/**
 * LayerOptions 图层基础配置
 */
type LayerBaseOptions = {
  /** 数据源 */
  source?: any;
};

export const useCreateLayer = <L extends Layer, C extends LayerCommonProps<L> & LayerBaseOptions>(
  Ctor: LayerCtor<C, L>,
  config: C,
) => {
  const layerManager = useLayerManager();
  const layerRef = useRef<L>();
  const { onCreated, source, ...options } = config;

  // 生成图层
  // 添加到 layerManager 自动加载到 scene
  if (!layerRef.current) {
    layerRef.current = new Ctor(config);
    layerManager.addLayer(layerRef.current);

    // For Temporary
    if (onCreated) {
      setTimeout(() => onCreated(layerRef.current), 0);
    }
  }

  // options 更新时
  useUpdateEffect(() => {
    if (layerRef.current) {
      layerRef.current.update(options);
    }
  }, [options]);

  // source 更新时
  useUpdateEffect(() => {
    if (layerRef.current) {
      layerRef.current.changeData(source);
    }
  }, [source]);

  // 组件销毁时
  useEffect(() => {
    return () => {
      if (layerRef.current) {
        layerManager.removeLayer(layerRef.current);
        layerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return layerRef;
};
