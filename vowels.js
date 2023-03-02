// Function to find number of vowels in a string

function vowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;
    for(char of string) {
        if(vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(vowels("because")); // Response => 4
console.log(vowels("hello world")); // Response => 3
console.log(vowels("hEllo wOrld")); // Response => 3