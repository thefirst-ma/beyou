---
title: 'promise 问题'
date: '2023-05-09'
---
<!--
 * @Author: xinyue
 * @Date: 2023-05-09 10:34:46
 * @Description: 
-->
**问题：多个请求每个都是200ms，但是要求在500ms内返回，可以使用什么方法？**

可以使用`promise.all()`方法来控制多个请求，保证多个请求并行执行，在`全部请求成功后|单个请求失败`时返回结果
    + **返回的顺序跟请求时间无关，跟放入`all`方法的顺序有关**
1. 全部执行成功
```javascript
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p1");
        }, 1000);
    })
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p2");
        }, 200);
    })
    let p3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p3");
        }, 100);
    })
    let pList = Promise.all([p1, p2, p3])
    console.log(pList) 
    // Promise {<pending>}
    //     [[Prototype]]: Promise
    //     [[PromiseState]]: "fulfilled"
    //     [[PromiseResult]]: Array(3)
```
2. 某一个执行失败
```javascript
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p1");
    }, 1000);
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("p2");
    }, 200);
}).catch(err=>{
    console.log({p2err: err})
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p3");
    }, 100);
})
let pList = Promise.all([p1, p2, p3]).then(value=>{
    console.log({then: value}) 
}).catch(err=>{
    console.log({pListErr: err})
}).finally(()=>{
    console.log({finally: 'finally'})
})
console.log(pList) 
    // Promise {<pending>}
    //     [[Prototype]]: Promise
    //     [[PromiseState]]: "rejected"
    //     [[PromiseResult]]: "p2"
```
#### 追问：如果有一个请求失败了，想拿到其他的成功请求，该怎么处理
#### 解答：
+ 可以使用`Promise.allSettled()`，他会返回所有的处理结果，包括成功及失败
+ 可以为每一个`promise请求实例`添加`catch`方法，这样会全部请求都会正常返回
```javascript
let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p1");
    }, 1000);
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("p2");
    }, 200);
}).catch(err=>{
    console.log({p2err: err})
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("p3");
    }, 100);
})
let pList = Promise.all([p1, p2, p3]).catch(err=>{
    console.log({pListErr: err})
}).finally(()=>{
    console.log({finally: 'finally'})
})
console.log({pList})
    // 为p2 没有catch 方法--------------------------
    // pList: Promise
    //     [[Prototype]]: Promise
    //     [[PromiseState]]: "fulfilled"
    //     [[PromiseResult]]: undefined

    // pListErr: "p2"
        // [[Prototype]]: Object

    // 为p2 添加自己的catch 方法------------------------
    // pList: Promise
    //     [[Prototype]]: Promise
    //     [[PromiseState]]: "fulfilled"
    //     [[PromiseResult]]: Array(3)
                // 0: "p1"
                // 1: undefined
                // 2: "p3"

    // 使用 allSettled + p2没有catch-------------------------
    // pList: Promise
    // [[Prototype]]: Promise
    // [[PromiseState]]: "fulfilled"
    // [[PromiseResult]]: Array(3)
    //     0: {status: 'fulfilled', value: 'p1'}
    //     1: {status: 'rejected', reason: 'p2'}
    //     2: {status: 'fulfilled', value: 'p3'}

    // 使用 allSettled + p2有catch----------------------------
    // pList: Promise
    // [[Prototype]]: Promise
    // [[PromiseState]]: "fulfilled"
    // [[PromiseResult]]: Array(3)
    //     0: {status: 'fulfilled', value: 'p1'}
    //     1: {status: 'fulfilled', reason: undefined}
    //     2: {status: 'fulfilled', value: 'p3'}

    // pListErr: "p2"
        // [[Prototype]]: Object
```
------
参考链接
+ [ES6教程-阮一峰 Promise](https://es6.ruanyifeng.com/#docs/promise#Promise-%E7%9A%84%E5%90%AB%E4%B9%89)