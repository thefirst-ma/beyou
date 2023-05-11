---
title: 'http 网络协议'
date: '2023-05-10'
---
<!--
 * @Author: xinyue
 * @Date: 2023-05-10 13:53:46
 * @Description: 
-->
#### HTTP和HTTPS有什么了解
  + 安全性：http是明文协议，数据传输过程中不进行加密；https使用ssl或者tls协议对数据进行加密，提高了安全性
    + 不加密的风险包括：窃听、篡改、冒充
    + https解决：加密传播、校验机制、身份证书
  + 默认端口：http`80端口`，https`443端口`
  + https需要数字证书来验证服务器身份，服务器向CA申请证书，客户端连接时验证证书有效性
  + 协议速度，https需要进行加解密，大量请求时可能会降低性能

#### http1.1都新增了哪些请求
   + http1.0请求方法Get,Post,Head, 新增了 `Put,Delete,Link,Unlink`
   + http1.1请求方法新增了`OPTIONS, TRACE, CONNECT`
#### GET与POST，PUT与POST方法都有什么区别
   + Get与post：
     + GET请求参数在URL上，明文可见，可以被用户修改，响应的结果可以被缓存，URL根据浏览器的不同有长度的限制
     + POST请求参数在body里，不可见，不可修改，响应结果不能被缓存，可以传递更多的参数类型，请求体没有长度限制
   + Put与Post：
     + Put请求一般用来请求服务器创建或更新指定URL下的资源，具有幂等性
     + POST请求一般用来请求服务器创建一个新的资源，语义上来说偏向于提交和发送，不具有幂等性
#### HTTP1.0 和HTTP1.1有什么了解
  + 持久连接
    + HTTP1.0请求使用非持久连接，每次请求都要建立新的连接
    + HTTP1.1可以在一次连接上发送多个请求和响应
  + 管道化
    + HTTP1.0 每次只能发送一个请求，等待响应后才能发送第二个请求
    + HTTP1.1 支持管道化，可以在一次连接上发送多个请求，无需等待响应
  + 分块传输编码
    + 1.1可以把服务器的响应分成多个块传输，大大提高文件的传输效率，无需等待服务器全部响应完成就可以逐步发送数据
  + 域名的多路复用
    + 1.0每次连接只能服务一个域名
    + 1.1通过在请求头中添加host字段，使得多个域名可以通过同一个连接进行请求和响应，提高了服务器的利用率
#### HTTP的状态码都知道哪些
   + 1xx
      + 100 Continue 继续发送
      + 101 Switching Protocols 服务器根据响应头中的字段切换协议
   + 2xx 
      + 200 OK，表示从客户端发来的请求在服务器端被正确处理
      + 204 No content，表示请求成功，但响应报文不含实体的主体部分
   + 3xx 重定向
      + 301 Moved Permanently：被请求的资源已永久移动到新位置。
      + 302 Found：被请求的资源暂时移动到不同的URL。
        + 304 Not Modified：资源未被修改，可以使用缓存的版本。
   + 4xx 客户端错误
      + 400 bad request，请求报文存在语法错误
      + 401 unauthorized，表示发送的请求需要有通过 HTTP 认证的认证信息
      + 403 forbidden，表示对请求资源的访问被服务器拒绝
      + 404 not found，表示在服务器上没有找到请求的资源
   + 5xx 服务器异常
      + 500 internal sever error，表示服务器端在执行请求时发生了错误
      + 501 Not Implemented，表示服务器不支持当前请求所需要的某个功能
      + 503 service unavailable，表明服务器暂时处于超负载或正在停机维护，无法处理请求
      + 504 Gateway Timeout 网关或者代理的服务器无法在规定的时间内获得想要的响应
#### 参考链接
+ [HTTP vs HTTPS: Comparison, Pros and Cons, and More](https://www.hostinger.com/tutorials/http-vs-https)
+ [HTTP 协议入门 阮一峰](https://www.ruanyifeng.com/blog/2016/08/http.html)
+ [HTTP/1.x 的连接管理 MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
+ [SSL/TLS协议运行机制的概述 阮一峰](https://www.ruanyifeng.com/blog/2014/02/ssl_tls.html)
+ [http1.0](https://www.ietf.org/rfc/rfc1945.txt)
+ [http1.1](https://www.ietf.org/rfc/rfc2616.txt)
+ [前端面试 语雀](https://www.yuque.com/cuggz/interview/cdpgm0#XxfgG)