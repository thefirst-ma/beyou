---
title: 'SwitchHost 切换'
date: '2020-01-02'
---
#### github加速
##### 方案一
使用[ipaddress.com](https://www.ipaddress.com)将 `github.com`,`github.global.ssl.fastly.net`配置到`host`
```
140.82.112.3 github.com
151.101.1.194 github.global.ssl.fastly.net
```
#### 遇到的问题

+ [SH提示没有权限](https://blog.csdn.net/benpaodelulu_guajian/article/details/97390101)

##### 方案二
+ 使用vpn访问GitHub
+ 配置git `git config --global http.sslVerify "false"`
