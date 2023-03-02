function fizzbuzz(number) {
    for(i=1; i<=number; i++) {
        if(i%6 === 0) {
            console.log("Fizz Buzz");
        } else if(i%2 === 0) {
            console.log("Fizz");
        } else if(i%3 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzbuzz(6));
/* Response
    1
    Fizz
    Buzz
    Fizz
    5
    Fizz Buzz
*/