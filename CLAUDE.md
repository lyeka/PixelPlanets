# PixelPlanets - 像素风格程序化行星生成器
Three.js v0.139.2 + dat.gui v0.7.9 + esbuild v0.14.31

> L1 | 项目宪法 | GEB 分形文档系统

## 项目定位

基于 Three.js 的像素艺术风格程序化行星生成器，原版由 deep-fold 用 Godot 创建，此为 JavaScript/Three.js 移植版。核心理念：**简单规则产生复杂结果**，通过 FBM 噪声 + 图层叠加实现丰富的视觉效果。

## 目录结构

```
PixelPlanets/
├── index.js              # 主入口：场景初始化 + 动画循环 + GUI 控制
├── settings.js           # 全局配置：行星类型列表 + 种子值管理
├── index.html            # HTML 入口，加载 out.js
├── style.css             # 基础样式
├── server-side-example.js # Node.js 服务端渲染示例
├── out.js                # esbuild 打包输出（生成文件）
│
├── src/                  # 核心源码 (3子目录: Layers, Planets, colorScheme)
│   ├── Three.js          # Three.js 工厂函数封装
│   ├── camera.js         # 透视相机创建工具
│   ├── utils.js          # 工具函数 + 行星类型路由
│   ├── Layers/           # 图层系统：17 种可组合的渲染层
│   ├── Planets/          # 预设行星：9 种图层组合配方
│   ├── colorScheme/      # 调色板资源
│   ├── stars/            # 星星精灵图资源
│   ├── Images/           # 高光贴图
│   └── Universe/         # 预留扩展（空）
│
└── Images/               # 展示图片
```

## 核心架构

### 图层组合模式

```
Planet = Group(Layer1, Layer2, Layer3, ...)
每个 Layer = Mesh(PlaneGeometry, ShaderMaterial)
每个 ShaderMaterial = vertexShader + fragmentShader + uniforms
```

### 渲染管线

```
initScene() → createStars() → generatePlanetByType() → animate()
                                      ↓
                              switch(type) → createXxxPlanet()
                                      ↓
                              Group.add(Layer1, Layer2, ...)
```

### Shader 驱动动画

所有图层通过 `time` uniform 驱动动画，CPU 零计算：
- `time`: 时钟累计时间
- `time_speed`: 旋转速度（可通过鼠标拖拽调整）
- `seed`: 随机种子，控制噪声形态

## 技术栈

| 依赖 | 版本 | 用途 |
|------|------|------|
| three | 0.139.2 | 3D 渲染引擎 |
| dat.gui | 0.7.9 | 参数调试界面 |
| esbuild | 0.14.31 | 打包工具 |
| canvas | 2.9.1 | 服务端渲染支持 |
| gl | 5.0.0 | Headless WebGL |

## 命令

```bash
npm run build              # 打包到 out.js
npm run generate:server-side  # 服务端渲染示例
```

## 行星类型

| 类型 | 图层组成 |
|------|----------|
| No atmosphere | basePlanet + craterLayer |
| Earth Planet | basePlanet + landMass + cloudLayer + atmosphereLayer |
| Ice Planet | basePlanet + landMass + cloudLayer + atmosphereLayer |
| Lava Planet | basePlanet + craterLayer + cloudLayer |
| Dry Planet | basePlanet + landMass + lakeLayer + riversLayer |
| Gas giant 1 | baseGasPlanet + gasLayer + denseGasLayer |
| Gas giant 2 | baseGasPlanet + gasLayer + ringLayer |
| Asteroid | basePlanet + craterLayer (不规则形状) |
| Star | star + starBlobLayer + starFlareLayer |

## 核心算法

- **FBM 噪声**: 多层叠加的分形布朗运动，生成自然纹理
- **圆形噪声**: 生成陨石坑的圆形分布
- **像素化**: `floor(uv * pixels) / pixels` 实现像素艺术风格
- **抖动**: 颜色边界的平滑过渡

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
