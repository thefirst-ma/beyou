---
title: 'algorithm 问题'
date: '2023-04-19'
---
<!--
 * @Author: xinyue
 * @Date: 2023-04-19 16:47:48
 * @Description: algorithm 问题
-->

记录自己遇到的算法问题

1. 随机打乱数组

> 输入：无序的数组
> 输出：打乱后的数组
> 背景知识：Array.prototype.sort
>
> ![sort排序](./../public/images/sort排序.png)

```javascript
function randomArr (arr) {
    return arr.sort((a, b)=> {
        // [0, 1)
        return Math.random() - Math.random();
    })
}
```

2. 二分查找元素

> 输入：有序的数组 指定元素 arr value
> 输出：arr中刚比value大一点的那个数的索引，没有返回-1
> 背景知识：[while循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/while)

```javascript
// 左值left 数组中间位置的值middle 右值right 要查找的值value
// 想要找到离得查找的值最近的那个右侧的数 
// 当 中间值小于要找的值（判断不准确 只能知道）
// 当 左值小于右值 一直循环 [中间值等于输入值 | 直到右值索引比左值索引大一] => 结束循环 


//  中间值 == 输入值 直到右值索引比左值索引大一 跳出循环
//  if 中间值 > 查找值
//      right = middle;
        // 中间值索引更新1.0 总共七个元素 3 -> 3 + 2 = 5 中间值索引 = 当前索引 / 2 + 偏移量
        // 右值索引更新2.0 

//  else if 中间值 < 查找值
//      left = middle
//  else 中间值 = 查找值
//     return 中间值
//     查找值 4
//     1 22 左右值比较 第一次进入循环
//     3 中间索引 [1, 3, 5, 7, 9, 11, 22] Math.floor(length / 2)  
//     1 7 22 左值 中间值 右值
//     更新后 
//     1 5 7 左值 中间值 右值

//     2     (3+1) / 2    第二次进入循环 1, 3, 5, 7
//     1 5 7

//     1    (2 + 1) / 2    第三次进入循环 1, 3, 5
//     1 3 5

//     3 5 
//     1    (3 - 1) / 2 + 1    第四次进入循环 3, 5
//     3 5 5


//     查找值 10
//     1 22 左右值比较 第一次进入循环
//     3 中间索引 [1, 3, 5, 7, 9, 11, 22] Math.floor(length / 2)  
//     1 7 22 左值 中间值 右值
//     更新后 
//     7 11 22 左值 中间值 右值

//     5    (7 - 3) / 2 + 3    第二次进入循环 7, 9, 11, 22
//     7 11 22

//     4   (5 + 3) / 2    第三次进入循环 1, 3, 5
//     7 9 11

//     3 5 
//     1    (3 - 1) / 2 + 1    第四次进入循环 3, 5
//     3 5 5

let arr = [1, 3, 5, 7, 9, 11, 22];
function sortNumber (arr, value) {
    let result = undefined;
    let resultIndex = -1;
    let length = arr.length;
    let leftIndex = 0;
    let rightIndex = length - 1;
    let left = arr[0];
    let right = arr[arr.length - 1];
    let middleIndex = 0;
    if(value > right) return -1;
    while(left < right) {
        middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middle = arr[middleIndex];
        if(middle == value) {
            left = middle;
            result = middle;
            resultIndex = middleIndex;
            break;
        }
        if(rightIndex - leftIndex == 1) {
            result = right;
            resultIndex = rightIndex;
            break;
        }
        if (middle > value) {
            right = middle;
            rightIndex = middleIndex;
        } else if (middle < value) {
            left = middle;
            leftIndex = middleIndex;
        }
    }
    return {result, resultIndex};
}
console.log(sortNumber(arr, 23));
```
