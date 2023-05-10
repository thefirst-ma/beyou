---
title: '前端工程化'
date: '2023-05-04'
---
<!--
 * @Author: xinyue
 * @Date: 2023-05-04 15:12:26
 * @Description: 
-->
#### 介绍
在早期的`JavaScript`中不存在`类（class）`及`模块（module）`，当网页开发越来越复杂，需要一种方法可以让我们只关注核心的实现，其他功能借用其他人的模块。由此前端的模块化开发越来越重要。

#### 问题
+ 全局的变量命名冲突
+ 多个模块之间看不出引用关系
+ 代码的复用

#### 解决
+ 对象写法
  ```javascript
    let module = {
        _count: 1,
        f1: function () {

        },
        f2: function () {

        }
    }
    module.f1();
    module._count = 0
  ```
  + 缺点：变量名可以被更改
+ 立即执行函数
    ```javascript
    let module = (function () {
        _count: 1,
        f1: function () {

        },
        f2: function () {

        }
        return {
            f1, f2
        }
    })()
    module.f1();
  ```
  + 缺点：多模块之间引用关系不明显
  + 放大模式： 一个模块内引用其他的模块
  + 宽放大模式：立即执行函数参数可以为空
  + 输入全局变量：将其他模块显式的作为变量输入
+ 模块规范
  + commonJS规范：在node环境下被应用，一般用于服务器端编程
    + 缺点：在浏览器端加载需要先访问资源，容易造成卡顿
    + 解决：AMD规范，commonJS是`同步加载(synchronous)`，AMD是`异步加载(asynchronous)`
    ```javascript
    let path = require('path')
    let fs = require('fs')
    path.join()
    ```
  + AMD规范`Asynchronous Module Definition`：异步模块定义，模块加载不影响后面语句的运行
    + 扩展：`require.js` `curl.js`
    ```javascript
    require(['path'], function (path) {
        path.join();
    });
    ```
   + ES6模块化：尽量静态化，在编译时就确定模块的依赖关系，及输入输出的变量。
     + 使用编译时加载，可以使用静态分析
     + 效率高于common.js，可以用在服务端和移动端
     + 模块自动采用严格模式
     + 模块功能主要由两个命令构成：`export`和`import`。`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能
       + `export`语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
       + import会进行变量的提升，import命令在编译阶段执行
       + import是静态执行，所以不能使用表达式和变量
       + 使用`import()`实现函数的动态加载（同步加载），node环境下的`require()`异步加载
        ```javascript
        // 导出
        var firstName = 'Michael';
        export { firstName };

        ```
#### 参考链接
+ [Javascript模块化编程（一）：模块的写法](https://www.ruanyifeng.com/blog/2012/10/javascript_module.html)
+ [ES6教程-阮一峰 module](https://es6.ruanyifeng.com/#docs/module)

![hello](../public/images/profile.jpg)