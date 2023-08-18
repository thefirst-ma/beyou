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
    // let result = 0;
    // let leftLength = 0;
    let leftIndex = 0;
    let rightIndex = length - 1;
    let left = arr[0];
    let length = arr.length;
    let right = arr[arr.length - 1];
    // let middleIndex = Math.floor(length / 2);
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    let offset = 0;
    if(value > right) return -1;
    while(left < right) {
        let middle = arr[middleIndex];
        if(middle == value) {
            left = middle;
            // result = middleIndex;
            break;
        } else if (middle > value) {
            // if(middleIndex == 1) {
            //     middleIndex++
            // }
            // middleIndex = Math.floor(middleIndex / 2 + offset);
            right = middle;
            rightIndex = middleIndex;
        } else if (middle < value) {
            left = middle;
            leftIndex = middleIndex;
            // offset += middleIndex;
            // if(middleIndex == 1) {
            //     middleIndex = 1 + offset;
            // }else {
            //     middleIndex = Math.floor(middleIndex / 2) + offset;
            // }
        }
    }
    return {number: left, middleIndex};
}
console.log(sortNumber(arr, 2));