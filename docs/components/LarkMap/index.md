---
title: LarkMap
order: 0
toc: content
group:
  title: 容器组件
  order: 0
nav:
  title: 组件
  path: /components
---

## 介绍

LarkMap 是地图容器组件，相关地图组件与 Hooks 需放到容器组件内部才能使用，容器组件可通过属性配置不同的地图，支持 [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/map/)、[Gaode](https://lbs.amap.com/api/javascript-api/reference/map) 及 [L7Map](https://l7.antv.vision/zh/docs/api/map/map) 作为底图。

## 代码演示

### 通过配置项生成

<code src="./demos/default.tsx"></code>

### 事件绑定

<code src="./demos/event.tsx"></code>

### 通过实例生成

<code src="./demos/mapbox-instance.tsx"></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| className | 容器类名 | `string` | -- |
| style | 容器样式 | `CSSProperties` | -- |
| map | 地图实例，可选，也可以通过配置项自动生成实例，详见 [L7 map](https://l7.antv.vision/zh/docs/api/map/map) | `MapInstance` | -- |
| mapType | 地图类型 | `"GaodeV1"｜"GaodeV2"｜"Mapbox"｜"Map"` | `'Mapbox'` |
| mapOptions | 地图配置项，配合地图类型配置地图 | `MapOptions` | -- |
| onSceneLoaded | 场景加载成功回调 | `(scene: Scene) => void` | -- |
| logoPosition | logo 展示位置，配置项详见 [L7 logoPosition](https://l7.antv.vision/zh/docs/api/scene#logoposition) | `PositionName` | `'bottomleft'` |
| logoVisible | 是否显示 logo | `boolean` | `false` |
| antialias | 是否开启抗锯齿 | `boolean` | `true` |
| preserveDrawingBuffe | 是否保留缓冲区数据 | `boolean` | `false` |


### 事件

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onResize | 地图容器大小改变事件 | `MapEvent` | -- |
| onMapMove | 地图平移时触发事件 | `MapEvent` | -- |
| onMoveStart | 地图平移开始时触发 | `MapEvent` | -- |
| onMoveEnd | 地图移动结束后触发 | `MapEvent` | -- |
| onZoomChange | 地图缩放级别更改后触发 | `MapEvent` | -- |
| onZoomStart | 缩放开始时触发 | `MapEvent` | -- |
| onZoomEnd | 缩放停止时触发 | `MapEvent` | -- |
| onClick | 鼠标左键点击事件 | `MapEvent` | -- |
| onDoubleClick | 鼠标左键双击事件 | `MapEvent` | -- |
| onContextMenu | 鼠标右键单击事件 | `MapEvent` | -- |
| onMouseWheel |  鼠标滚轮开始缩放地图时触发 | `MapEvent` | -- |
| onMouseOver | 鼠标移入地图容器内时触发 | `MapEvent` | -- |
| onMouseOut | 鼠标移出地图容器时触发 | `MapEvent` | -- |
| onMouseUp | 鼠标在地图上单击抬起时触发 | `MapEvent` | -- |
| onMouseDown | 鼠标在地图上单击按下时触发 | `MapEvent` | -- |
| onDragStart | 开始拖拽地图时触发 | `MapEvent` | -- |
| onDragging | 拖拽地图过程中触发 | `MapEvent` | -- |
| onDragEnd | 停止拖拽地图时触发 | `MapEvent` | -- |

### MapOptions

> 地图底图类型不同时，MapOptions 配置项不完全相同，比如 maxZoom，GaodeV1 最大缩放等级 18，Mapbox 最大缩放等级 22。除此之外还有，底图的交互状态配置，zoomEnable、dragEnable 等。各配置项可详见各官网：高德地图 [配置项](https://lbs.amap.com/api/javascript-api/reference/map)；Mapbox 地图 [配置项](https://docs.mapbox.com/mapbox-gl-js/api/map/#map-parameters)。

| 参数     | 说明                                                                               | 类型     | 默认值   |
| -------- | ---------------------------------------------------------------------------------- | -------- | -------- |
| style    | 地图样式，详见 [L7 map](https://l7.antv.vision/zh/docs/api/scene#style-地图图样式) | `string` | `light`  |
| token    | 地图服务 token，需到服务平台申请                                                   | `string` | `(必选)` |
| center   | 初始中心经纬度                                                                     | `number` | --       |
| pitch    | 初始倾角                                                                           | `number` | --       |
| rotation | 初始旋转角度                                                                       | `number` | --       |
| zoom     | 初始缩放层级                                                                       | `number` | --       |
| minZoom  | 地图最大缩放等级                                                                   | `number` | --       |

### RefAttributes

| 参数     | 说明            | 类型                | 默认值 |
| -------- | --------------- | ------------------- | ------ |
| getScene | 获取 Scene 实例 | `() => Scene`       | --     |
| getMap   | 获取 Map 实例   | `() => MapInstance` | --     |
