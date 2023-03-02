// Given a phrase, reverse the order of the characters of each word.

function reverseWord(phrase) {
    return phrase
            .split(" ")
            .map(word => 
                word
                .split("")
                .reverse()
                .join(""))
            .join(" ");
}

console.log(reverseWord("I love JavaScript!")) // response => I evol !tpircSavaJ