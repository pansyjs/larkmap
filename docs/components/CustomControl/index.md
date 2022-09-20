---
toc: content
order: 3
group:
  title: 控件组件
  order: 2
nav:
  title: 组件
  path: /components
---

# CustomControl 自定义控件

## 介绍

自定义地图控件组件

## 代码演示

### 默认示例

<code src="./demos/default.tsx" defaultShowCode></code>

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|name|名称|`string`|--|
|position|位置，支持 `topright`、`topleft`、`bottomright`、`bottomleft`、`topcenter`、`bottomcenter`、`leftcenter`、`rightcenter`|`PositionName	`| `topleft` |
| children | 子组件 | `ReactNode` | -- |
| className | 类名 | `string` | -- |
| style | 行内样式 | `CSSProperties` | -- |