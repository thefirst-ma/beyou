/*
 * @Author: xinyue
 * @Date: 2023-04-19 19:37:36
 * @Description: 
 */
function printNumber (n, m) {
    // n 行数
    // m 列数
    let arr = [];
    let number = 1;
    for (let index = 0; index < n; index++) {
        // arr[index].push([])
        for (let b = 1; b <= m; b++) {
            // const element = array[index];
            if(arr[index]) {
                if(index%2 != 0){
                    arr[index].unshift(number)
                } else {
                    arr[index].push(number)
                }
            } else {
                arr[index] = [number]
            }
            number++
        }
    }
    for (let index = 0; index < m; index++) {
        let str = ''
        // 1234
        // 8765
        arr.forEach((item) => {
            str+=item[index]+ ''
        })
        console.log(str)
    }
}
// printNumber(6, 4)
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