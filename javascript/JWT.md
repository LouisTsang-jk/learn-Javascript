# JWT(Json Web Tokens)
1. 用户输入账号密码登陆，服务器认证成功则返回JWT
2. 客户端将JWT做持久化存储，一般是`localstorage`或者`cookies`
3. 返回JWT给服务器

如果是token的话则需要查询数据库