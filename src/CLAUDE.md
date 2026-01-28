# src/
> L2 | 父级: /CLAUDE.md

核心源码目录，包含 Three.js 封装、工具函数和三大子模块。

## 成员清单

```
Three.js:    Three.js 工厂函数，封装 Scene/Clock/Renderer/Group 创建
camera.js:   透视相机工厂，封装 PerspectiveCamera 创建
utils.js:    工具函数集 + 行星类型路由（switch-case 分发）
```

## 子目录

```
Layers/      图层系统，17 种可组合的 Shader 渲染层
Planets/     预设行星，9 种图层组合配方
colorScheme/ 调色板 PNG 资源
stars/       星星精灵图资源
Images/      高光贴图资源
Universe/    预留扩展（空目录）
```

## 架构职责

```
utils.js::generatePlanetByType(type)
    ↓ switch-case 路由
Planets/*.js::createXxxPlanet()
    ↓ 组合图层
Layers/*.js::createXxxLayer()
    ↓ 返回 Mesh
Three.js Group 容器
```

## 依赖关系

```
index.js → utils.js → Planets/*.js → Layers/*.js
              ↓
         Three.js, camera.js
```

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
