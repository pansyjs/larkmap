# [2.0.0](https://github.com/pansyjs/larkmap/compare/v1.10.0...v2.0.0) (2024-01-22)


### Bug Fixes

* 修复 mapbox 示例报错 ([a203f75](https://github.com/pansyjs/larkmap/commit/a203f7532dbd8dda9f880c2f7d44a833621b2812))


### chore

* 去除手动发布 ([6066036](https://github.com/pansyjs/larkmap/commit/6066036f234122dd6514dd95def0b0df4346f81d))


### Features

* 优化 mapbox 地图逻辑 ([8efc7ef](https://github.com/pansyjs/larkmap/commit/8efc7ef52c844a89fe4fe5bc43d99d40b3856843))
* 去除 MapboxV2 配置 ([3377a07](https://github.com/pansyjs/larkmap/commit/3377a07337b1705f3dbca395c183dd21df058923))


### BREAKING CHANGES

* 实例化 Mapbox 优化，去除内部逻辑

# [1.10.0](https://github.com/pansyjs/larkmap/compare/v1.9.0...v1.10.0) (2023-12-06)


### Features

* 升级mapbox版本到v3.0 ([340af17](https://github.com/pansyjs/larkmap/commit/340af176fa98df5edbdb460f262bfd2ed0e0ca66))

# [1.9.0](https://github.com/pansyjs/larkmap/compare/v1.8.0...v1.9.0) (2023-05-08)


### Features

* mapboxV2支持配置地图投影方式 ([864eb3b](https://github.com/pansyjs/larkmap/commit/864eb3ba0e00813e8fbc3a4c9d8c49cfa988e138))
* 支持请求业务瓦片地图在header上添加token验证 ([6f31f40](https://github.com/pansyjs/larkmap/commit/6f31f409ca5e74962c5a0e72a4d3b48a6cd9e479))

# [1.8.0](https://github.com/pansyjs/larkmap/compare/v1.7.0...v1.8.0) (2023-04-10)


### Features

* mapboxV2支持配置地图投影方式 ([#9](https://github.com/pansyjs/larkmap/issues/9)) ([5022481](https://github.com/pansyjs/larkmap/commit/5022481d13f2ecb032790ac7e249431b9af7be47))

# [1.7.0](https://github.com/pansyjs/larkmap/compare/v1.6.1...v1.7.0) (2023-03-29)


### Features

* 优化地图加载逻辑 ([#8](https://github.com/pansyjs/larkmap/issues/8)) ([eb8dfb7](https://github.com/pansyjs/larkmap/commit/eb8dfb7e78e121f099f772228f1431ae9bb803d4))

## [1.6.1](https://github.com/pansyjs/larkmap/compare/v1.6.0...v1.6.1) (2023-03-06)


### Bug Fixes

* 修复access-token设置失败的问题 ([c20cdc5](https://github.com/pansyjs/larkmap/commit/c20cdc53797ce375a5d6d342a2656473d6bb1eaa))

# [1.6.0](https://github.com/pansyjs/larkmap/compare/v1.5.0...v1.6.0) (2022-12-08)


### Features

* 支持MapboxV2版本 ([#6](https://github.com/pansyjs/larkmap/issues/6)) ([b16434b](https://github.com/pansyjs/larkmap/commit/b16434bc2e8098ecd8556c86009c2911837f3f5e))

# [1.5.0](https://github.com/pansyjs/larkmap/compare/v1.4.0...v1.5.0) (2022-11-22)


### Features

* update peerDependencies ([6d953a3](https://github.com/pansyjs/larkmap/commit/6d953a3ed5ba158f238f8546d94764822e108967))

# [1.4.0](https://github.com/pansyjs/larkmap/compare/v1.3.3...v1.4.0) (2022-09-27)


### Bug Fixes

* 修复地图加载成功回调函数拼写错误 ([3cf8441](https://github.com/pansyjs/larkmap/commit/3cf84413afb56f14411d479f36ce866fc4b902cd))


### Features

* 代码优化 ([813eb98](https://github.com/pansyjs/larkmap/commit/813eb98810d693be06f1253a07c72760457fb0fd))
* 增加地点搜索组件 ([9baeaa9](https://github.com/pansyjs/larkmap/commit/9baeaa9bcc96128d8e4f66a78b76fffe942424c4))
* 增加显示隐藏控制 ([12d611e](https://github.com/pansyjs/larkmap/commit/12d611e36b6a5ecf08dedab0727eec4f52915b40))
* 自定义控件 ([a129dfc](https://github.com/pansyjs/larkmap/commit/a129dfca4fdca680b9fa376bcdbcdd720d12ead5))

## [1.3.3](https://github.com/pansyjs/larkmap/compare/v1.3.2...v1.3.3) (2022-08-29)


### Bug Fixes

* 修复聚合点不展示问题 ([d8c6cad](https://github.com/pansyjs/larkmap/commit/d8c6cad7497365b7e182ed6f4809f75a0a673f82))

## [1.3.2](https://github.com/pansyjs/larkmap/compare/v1.3.1...v1.3.2) (2022-08-29)


### Bug Fixes

* 修复聚合点更新问题 ([241ff1b](https://github.com/pansyjs/larkmap/commit/241ff1b3474d88950ab90f7e66bed61b63dd72aa))

## [1.3.1](https://github.com/pansyjs/larkmap/compare/v1.3.0...v1.3.1) (2022-08-26)


### Bug Fixes

* 修复聚合点更新数据，未清除原有聚合点问题 ([7208e6a](https://github.com/pansyjs/larkmap/commit/7208e6aca7881a9158eeea2f1ae975350b3c40ae))

# [1.3.0](https://github.com/pansyjs/larkmap/compare/v1.2.0...v1.3.0) (2022-08-25)


### Features

* 聚合点支持绑定右键事件 ([3510adc](https://github.com/pansyjs/larkmap/commit/3510adc0a869b5e1ca56231f088ff56f0b42b42e))

# [1.2.0](https://github.com/pansyjs/larkmap/compare/v1.1.0...v1.2.0) (2022-08-25)


### Bug Fixes

* 修复聚合点点击下钻效果无效 ([1a50edd](https://github.com/pansyjs/larkmap/commit/1a50edd070b2d47db7d62e782710326403599fa1))


### Features

* 聚合点添加销毁逻辑 ([e8737c2](https://github.com/pansyjs/larkmap/commit/e8737c239a16ab73738dd9d9b90693561a877b2f))

# [1.1.0](https://github.com/pansyjs/larkmap/compare/v1.0.0...v1.1.0) (2022-08-22)


### Features

* replace lodash isFunction ([417e1aa](https://github.com/pansyjs/larkmap/commit/417e1aad241183734474af2565dfa1fa74755ae0))
