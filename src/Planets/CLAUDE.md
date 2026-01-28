# src/Planets/
> L2 | 父级: /src/CLAUDE.md

预设行星配方，9 种图层组合。每个文件导出一个工厂函数，返回包含多个图层的 Group。

## 设计模式

**工厂模式 + 组合模式**：
```javascript
export const createXxxPlanet = () => {
    const planet = new Group();
    planet.add(layer1, layer2, layer3, ...);
    return planet;
}
```

## 成员清单

### 岩石行星
```
noAtmosphere.js:  无大气层行星（月球风格），basePlanet + craterLayer
earthPlanet.js:   地球型行星，basePlanet + landMass + cloudLayer + atmosphereLayer
icePlanet.js:     冰冻行星，蓝白色调，basePlanet + landMass + cloudLayer + atmosphereLayer
lavaPlanet.js:    熔岩行星，红黑色调，basePlanet + craterLayer + cloudLayer
DryPlanet.js:     干旱行星，黄褐色调，basePlanet + landMass + lakeLayer + riversLayer
```

### 气态行星
```
gasGiant.js:      气态巨行星，baseGasPlanet + gasLayer + denseGasLayer
gasGiantRing.js:  带环气态巨行星，baseGasPlanet + gasLayer + ringLayer
```

### 特殊天体
```
asteroid.js:      小行星，不规则形状 + 陨石坑，size uniform 控制形变
starPlanet.js:    恒星，star + starBlobLayer + starFlareLayer
```

## 图层叠加顺序

图层按添加顺序渲染，后添加的在上层：
```
Group.add(底层, 中层, 上层, 最外层)
         ↓     ↓     ↓      ↓
      basePlanet → landMass → clouds → atmosphere
```

## 颜色配置

每个行星通过 Vector4 数组定义调色板：
```javascript
const colors = [
    new Vector4(r/255, g/255, b/255, alpha),  // 亮部
    new Vector4(...),                          // 中间调
    new Vector4(...)                           // 暗部
]
```

## 依赖关系

```
所有文件 → three (Group, Vector4)
所有文件 → ../Layers/*.js (图层工厂函数)
```

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
