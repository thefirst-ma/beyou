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
    let left = arr[0];
    let length = arr.length;
    let right = arr[arr.length - 1];
    let result = 0;
    let leftLength = 0;
    while(left < right) {
        let middleLength = Math.floor(length / 2);
        let middle = arr[middleLength]
        if(middle == value) {
            left = middle;
            result = middleLength;
            // leftLength = middleLength;
            return;
        } else if (middle > value) {
            result = middleLength;
            if(right == middle) {
                left = right;
            } 
            right = middle;
            // length = middleLength + leftLength;
        } else if (middle < value) {
            left = middle;
            length = ((length - middleLength) / 2 + leftLength) * 2;
        }
    }
    return {number: left, result};
}
console.log(sortNumber(arr, 2));