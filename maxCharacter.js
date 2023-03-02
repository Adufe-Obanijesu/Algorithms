// Function to find the character with the highest number of occurence

function maxCharacter(string) {
    let charObj = {}

    for(char of string.toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1;
    }

    let maxChar;
    let maxCharNo = 0;

    for(char in charObj) {
        if(charObj[char] > maxCharNo) {
            maxCharNo = charObj[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxCharacter("hello world")); // respose => l
console.log(maxCharacter("heLLo world wide")); // respose => l