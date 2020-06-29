# Cross-site request forgery「跨站请求伪造」
利用网站对用户浏览器的信任
# 防御原则
- Get请求不对数据进行操作
- 不让第三方网站访问到用户cookie
- 阻止第三方网站请求接口
- 请求附带验证信息(验证码&token)
# 防御手段
- `SameSite`
对Cookie设置`SameSite`属性。保证Cookie不随跨域请求发送。**(该属性并不是所有浏览器兼容)**
- 验证`Referer`
通过验证`Referer`判断请求是否为第三方网站发起。
> Referer正确英文应该是`referrer`，这是由于早期HTTP规范的拼写错误。(注意首字母是大写)。   
> Referer表示HTTP请求的来源。除防御CSRF之外，还能实现防盗链的作用，即获取图片的时候每次都确认是否从自己域名发起的请求。
- `Token`
服务器下发随机Token，然后浏览器每次请求的时候将Token携带上，服务器验证Token是否有效。