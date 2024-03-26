const arr = [2, 4, 7, 8, 1, 5];
console.log(arr);
for (i = 0; i < 6; i++) {
    console.log(arr[i]);
}
console.log(arr[1]);
let result = arr.filter((item) => {
    return item === 4
})
console.log(result);
let res = arr.filter((item) => {
    return item > 4
})
console.log(res);