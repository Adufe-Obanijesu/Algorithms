// Code to show the fibonacci sequence of a given number n

function fibonacci(n) {
    let array = [];
    for(let i = 0; i<n; i++) {
        if(i==0) {
            array.push(0);
        } else if(i==1) {
            array.push(1)
        }else{
            array.push(array[i-1] + array[i-2])
        }
    }

    return array;
}

// Big-O Notation -> O(n)

console.log(fibonacci(5)); // Result is [0,1,1,2,3]
console.log(fibonacci(10)); // Result is [0,1,1,2,3,5,8,13,21,34]
console.log(fibonacci(1)); // Result is [0]
console.log(fibonacci(0)); // Result is []
console.log(fibonacci(2)); // Result is [0,1]