<h1 align="center">
  LarkMap
</h1>

<div align="center">
🌍 基于 <a href="https://github.com/antvis/L7">L7</a> 封装的位置可视分析 React 组件库.
</div> 

## 📦 安装

```sh
# npm
$ npm install @antv/l7 @pansy/lark-map

# yarn
$ yarn add @antv/l7 @pansy/lark-map

# pnpm
$ pnpm i @antv/l7 @pansy/lark-map
```

## 🔨 使用

```tsx
import { LarkMap } from '@pansy/lark-map';

const config = {
  mapType: 'Mapbox',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 8,
    ...
  },
};

export default () => {
  return <LarkMap {...config} style={{ height: '300px' }}></LarkMap>;
};
```
