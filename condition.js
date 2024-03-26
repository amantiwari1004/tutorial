var x = 10;
let y = 10;
if (x === y) {
    console.log("matched ");
}
let z = 20;

if (x < z) {
    console.log("X is less than z ");
    if (x === y) {
        console.log("x is equal to y ");
    }
}
if (x < z && x === y) {
    console.log("X is equal to y and x is less than z");
}