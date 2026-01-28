# src/Layers/
> L2 | 父级: /src/CLAUDE.md

图层系统核心，17 种可组合的 Shader 渲染层。每个图层是独立的 Mesh，通过 Group 叠加组成完整行星。

## 设计哲学

**组合优于继承**：每个图层职责单一，可自由组合创造新行星类型。

## 成员清单

### 基础层
```
basePlanet.js:      基础行星层，FBM 噪声 + 三色光照渐变，所有岩石行星的底层
baseGasPlanet.js:   气态行星基础层，横向条纹 + 动态扰动
```

### 地表层
```
landMass.js:        陆地层，FBM 噪声生成大陆形状，通过 alpha 控制可见性
lakeLayer.js:       湖泊层，在陆地上生成水体
riversLayer.js:     河流层，线性噪声生成河流纹理
craterLayer.js:     陨石坑层，圆形噪声生成撞击坑
```

### 大气层
```
atmosphereLayer.js: 大气层，径向渐变 + smoothstep 柔和过渡
cloudLayer.js:      云层，球面映射 + 动态噪声 + 光照阴影
gasLayer.js:        气态行星气流层，横向流动效果
denseGasLayer.js:   密集气流层，更浓厚的气体效果
```

### 恒星层
```
star.js:            恒星核心，高亮发光球体
starBlobLayer.js:   恒星斑点层，表面活动区域
starFlareLayer.js:  恒星耀斑层，边缘喷发效果
```

### 装饰层
```
ringLayer.js:       行星环，土星环效果
highlightBorder.js: 高光边缘，使用贴图增强立体感
```

### 背景层
```
stars.js:           背景星空，Sprite 粒子系统，1000 个随机分布的星星
background.js:      太空背景层
```

## Shader 架构

所有图层共享相同的 vertexShader：
```glsl
varying vec3 vUv;
void main() {
    vUv = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

统一的 uniforms 接口：
- `time`: 动画时间
- `time_speed`: 旋转速度
- `seed`: 随机种子
- `pixels`: 像素化分辨率（默认 100.0）
- `light_origin`: 光源位置
- `rotation`: 旋转角度

## 核心算法

### FBM 噪声
```glsl
float fbm(vec2 coord) {
    float value = 0.0, scale = 0.5;
    for(int i = 0; i < OCTAVES; i++) {
        value += noise(coord) * scale;
        coord *= 2.0; scale *= 0.5;
    }
    return value;
}
```

### 圆形噪声（陨石坑）
```glsl
float circleNoise(vec2 uv) {
    float h = rand(floor(uv));
    float m = length(fract(uv) - 0.25 - h*0.5);
    return smoothstep(h*0.25, h*0.25*0.9, m);
}
```

### 球面映射
```glsl
vec2 spherify(vec2 uv) {
    vec2 centered = uv * 2.0 - 1.0;
    float z = sqrt(1.0 - dot(centered.xy, centered.xy));
    return centered / (z + 1.0) * 0.5 + 0.5;
}
```

[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
