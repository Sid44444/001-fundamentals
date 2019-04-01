function add(a, b) {
    return a + b;
}

module.exports = {
    add,subtract,multiply,isOdd,isEven,divisibleBy,squareIt
};//This is the only module that is read.

function subtract(a, b) {
    return a - b;
}
//module.exports = {
    //subtract
//};

function multiply(a, b) {
    return a * b;
}


function isOdd(num) { 
var remainder = num % 2
if (remainder ===1 ) return true;
if (remainder ===0 ) return false;
}
function isEven(num) {
    var remainder = num % 2
    if (remainder ===1 ) return false;
    if (remainder ===0 ) return true;
}

function divisibleBy(a,b) {
    var divisible = a % b
    if (divisible ===1 ) return false;
    if (divisible ===0 ) return true;
}

function squareIt(number) {
    return number * number;
 }