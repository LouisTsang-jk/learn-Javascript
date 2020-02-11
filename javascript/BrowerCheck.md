### 能力检查(特性检查)
识别浏览器的能力，而并不是识别浏览器的特定的浏览器

#### *判断是移动端还是电脑端*
const isMobile = 'ontouchstart' in document;
console.log(isMobile);

### 怪癖检查
识别浏览器的特殊行为，目的是确定浏览器是否有某个缺陷。

### 用户代理检查
通过访问navigator.userAgent。此方法优先级应低于上述两种方法。

chrome将在81版本后逐步废用User-Agent