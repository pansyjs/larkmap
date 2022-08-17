---
title: MarkerCluster 标注聚合
order: 4
group:
  title: 分析组件
nav:
  title: 组件
  path: /components
---

# MarkerCluster 标注聚合

## 介绍

Marker图层组件

## 使用场景

## 代码演示

### 默认示例

<code src="./demos/default.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|cluster|是否聚合|`boolean`|`true`|
|clusterOption|聚合配置|`ClusterOption`| -- |
| data | 需要聚合的数据 | `any[]` | -- |
| zoomOnClick | 点击聚合点时，是否散开 | `boolean` | `true` |
| disabledDrillDownMaxZoom | 禁用下钻逻辑的最大层级 | `number` | -- |
| render | 非聚合点自定义渲染 | `React.ReactNode \| string \| function` | -- |
| renderCluster | 聚合点自定义渲染 | `React.ReactNode \| string \| function` | -- |
| getLng | 获取标注的经度 | `(data: D) => number;` | -- |
| getLat | 获取标注的维度 | `(data: D) => number;` | -- |
| onClick | 标注、聚合点的点击事件 | `(e: ElementArgs<D>) => void` | -- |


### ClusterOption


| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|className||`string`| -- |
|field|聚合统计字段|`string`| -- |
