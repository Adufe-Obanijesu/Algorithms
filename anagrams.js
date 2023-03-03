// Anagrams are words or phrases that contain the same number of characters.
// Create a function to check for this

function charCount(string) {
    const spaceRemovedString = string.replace(/\W/g, "");
    
    let table = {};

    for (char of spaceRemovedString) {
        table[char] = table[char] + 1 || 1
    }

    return table;
}

function anagrams(stringA, stringB) {
    const countStringA = charCount(stringA);
    const countStringB = charCount(stringB);

    if(Object.keys(countStringA).length !== Object.keys(countStringB).length) return false;

    for (char in countStringA) {
        if (countStringA[char] !== countStringB[char]) return false;
    }

    return true;
}

console.log(anagrams("hello world", "world hello")); // return true
console.log(anagrams("hellow world", "hello there")); // return false
console.log(anagrams("hellow world", "hello there!")); // return false

// Second way
function sort(string) {
    const sortedString = string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
    return sortedString;
}

function _anagrams(stringA, stringB) {
    if (sort(stringA) !== sort(stringB)) return false;
    return true;
}

console.log(_anagrams("hello world", "world hello")); // return true
console.log(_anagrams("hellow world", "hello there")); // return false
console.log(_anagrams("hellow world", "hello there!")); // return false
