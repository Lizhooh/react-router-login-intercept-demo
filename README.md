
## React 路由拦截示例

**有几个页面：**
- 主页：/index
- 用户页：/user
- 登录页：/login

在全局拦截里，如果访问 `/user` 等受保护的路径，则会检查登录状态，如果未登录则会重定向到 **登录页**，登录完成后会重定向去目标页。

在部分拦截里，如果访问受保护的路径，则会检查登录状态，如果未登录则会重定向到 **登录页**，登录完成后会重定向去目标页。
