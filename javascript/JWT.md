# JWT(Json Web Tokens)
1. 用户输入账号密码登陆，服务器认证成功则返回JWT
2. 客户端将JWT做持久化存储，一般是`localstorage`或者`cookies`
3. 返回JWT给服务器

如果是token的话则需要查询数据库
## 组成
JWT实际是字符串，用`.`区分3个部分，即是`Header.Payload.Signature`
- Header「头部」
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
  1. `alg`
  表示签名算法，默认`HMAC SHA256`简写`HS256`
  2. `typ`
  表示令牌「token」的类型「type」
- Payload「负载」
  1. iss(issure)「签发人」
  2. exp(expiration time)「过期时间」
  3. sub(subject)「主题」
  4. aud(audience)「受众」
  5. nbf(Not Before)「生效时间」
  6. iat(Issued At)「签发时间」
  7. jti(JWT ID)「编号」
- Signature「签名」
是对前面两部分的签名，防止数据篡改。指定密钥「secret」(仅服务器知道)。
## 使用
客户端收到服务器返回的JWT，可以存储在`Cookie`或者`localStorage`