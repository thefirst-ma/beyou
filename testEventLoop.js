/*
 * @Author: xinyue
 * @Date: 2023-04-20 16:01:44
 * @Description: 
 */
async function async1(){
    console.log(1)
    await async2()
    await console.log(2)
    console.log(9)
}
async function async2(){
    console.log(3)
}
setTimeout(() => {
    console.log(5)
});
console.log(4)
async1()
new Promise(function(resolve){
    console.log(6)
    resolve();
}).then(function(){
    console.log(7)
})
console.log(8) 
// 4 1 3 6 8 2 7 9 5