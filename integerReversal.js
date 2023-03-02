function integerReversal(integer) {
    // Reversing the integer
    const reversedInterger = parseInt(integer.toString().split("").reverse().join("")) * Math.sign(integer);
    
console.log(reversedInterger)
}

integerReversal(456);
integerReversal(-36425);
integerReversal(65869);
integerReversal(0);