// Given a phrase, capitalize every word

function capitalize(string) {
    const separatedWord = string.split(" ");
    let capitalizedWord = [];
    for(word of separatedWord) {  
        capitalizedWord.push(word[0].toUpperCase() + word.slice(1));
    }

    return capitalizedWord.join(" ");
}

console.log(capitalize("hello world")); // returns Hello World
console.log(capitalize("hello there")); // returns Hello There
console.log(capitalize("i love javascript")); // I Love Javascript!