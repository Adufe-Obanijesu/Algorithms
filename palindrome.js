function palindrome(string) {
    let reversedString = string.split("").reverse().join("");
    if(string === reversedString) {
        return true;
    }
    return false;
}

palindrome("kook");
palindrome("pop")
palindrome("race");