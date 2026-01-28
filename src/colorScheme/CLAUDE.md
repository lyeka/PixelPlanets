# src/colorScheme/
> L2 | 父级: /src/CLAUDE.md

调色板 PNG 资源目录，用于 Shader 采样获取颜色。

## 成员清单

```
colorScheme1.png:  通用调色板 1，多色渐变
colorScheme2.png:  通用调色板 2，多色渐变
```

## 子目录

```
starPalette/       恒星专用调色板
├── bluePalette.png    蓝色恒星
├── orangePalette.png  橙色恒星
├── redPalette.png     红色恒星
├── whitePalette.png   白色恒星
└── yellowPalette.png  黄色恒星
```

## 使用方式

Shader 通过 TextureLoader 加载调色板，使用 UV 坐标采样获取颜色：
```javascript
const texture = new TextureLoader().load("src/colorScheme/colorScheme1.png");
texture.magFilter = NearestFilter;  // 保持像素风格
```

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
