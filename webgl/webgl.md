# webgl
## 概念
1. 场景「Scene」
物体、光源等元素的容器。
2. 相机「Camera」
代替人眼观察，场景中只能添加一个。
  - 透视相机「Perspective」
  模拟人眼视角，适合3D场景。
  - 正交相机「Orthographic」
  物体渲染尺寸与距离无关，适合2D场景。
3. 物体对象「Mesh」
  - 二维物体(点、线、面)
  - 三维物体
  - 模型
4. 光源「Light」
|光源|说明|
|-|-|
|`AmbientLight`|为场景添加全局的环境光，没有特定方向，**不会产生阴影**，一般和`SpotLight`和`DirectionalLight`等光源结合使用，柔滑阴影。|
|`AreaLight`|面光源，指定一个发光的区域|
|`DirectionalLight`|无限光，即光线是平行的。一般用于模拟遥远的光，如太阳。**与`SpotLight`主要区别是不会随着距离而变暗，所有被照射到的地方都获得相同的光照强度**。|
|`HemisphereLight`|特殊光源，用于创建户外自然的光线。一般用来模拟物体表面反光效果、微弱发光的天空|
|`LensFlare`|用于给光源添加镜头光晕效果|
|`PointLight`|3D空间中的一个点光源，向所有方向发出光线。|
|`SpotLight`|产生圆锥形光柱的聚光灯、台灯、天花板射灯通常都术语这类光源，这种光源的使用场景最多，**尤其是需要阴影效果**。|
5. 渲染器「Renderer」

6. 控制器「Control」

7. Mesh「材质(Material)+几何体(Geometry)」
计算机的三维模型是由三角形组成的网格来组成，这种模型称为：`「Mesh」`。设置`name`属性之后可以通过`scene.getObjectByName(name)`获取该物体对象；打比方的话，几何体「Geometry」就是骨架，材质「Material」就是皮肤。
## 加载外部模型
通过`Three.js加载器「Loader」`将特定的文本/二进制转化为Three.js对象结构。
> 贴图的尺寸必须是(2的幂数)*(2的幂数)，为了防止贴图变形，平面的宽度比例需要和贴图的比例一致。
## 粒子
`THREE.Sprite`  
在WebGIRenderer渲染器中使用`THREE.Sprite`
# 参考
[ThreeJs 基础入门](https://sq.163yun.com/blog/article/203590884053413888)