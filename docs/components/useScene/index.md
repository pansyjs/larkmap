---
title: useScene
toc: content
group:
  title: 容器组件
nav:
  title: 组件
  path: /components
---

# useScene

## 介绍

获取 scene 实例 Hook，一般用于子组件拿到 scene 实例，该 Hook 需放到容器组件内部才能使用。

## API

```tsx | pure
const scene = useScene();
```

## Result

| 返回值      | 说明               | 类型                                                                             |
| ----------- | ------------------ | -------------------------------------------------------------------------------- |
| scene       | scene 实例，实例方法详见 [L7 scene](https://l7.antv.vision/zh/docs/api/scene/)  | `Scene` |

