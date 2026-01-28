# src/stars/
> L2 | 父级: /src/CLAUDE.md

星星精灵图资源目录，用于背景星空粒子系统。

## 成员清单

```
stars.png:          普通星星精灵图，17 帧动画，9x9 像素每帧
stars-special.png:  特殊星星精灵图，6 帧动画，25x25 像素每帧
```

## 使用方式

通过 TextureLoader 加载，使用 repeat 和 offset 选择帧：
```javascript
texture.repeat.x = 1 / 17;  // 17 帧
texture.offset.x = frameIndex * 9 / 144;  // 选择帧
```

## 被消费者

- `src/Layers/stars.js` - createStars() 函数

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
