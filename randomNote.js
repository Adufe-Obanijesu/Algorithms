// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words

function randomNote(magazine, note) {
    const magazineWords = magazine.toLowerCase().split(" ");
    let magazineHash = {};

    for(word of magazineWords) {
        magazineHash[word] = magazineHash[word] + 1 || 1
    }

    const noteWords = note.toLowerCase().split(" ");
    for (word of noteWords) {
        if (magazineWords.includes(word) === false) return false;

        magazineHash[word]--;

        if (magazineHash[word] < 0) return false;

    }

    return true;
}

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

randomNote(magazine, "sit ad est sint"); // returns true
randomNote(magazine, "sit ad est love"); // returns false
randomNote(magazine, "sit ad est sint in in"); // returns true
randomNote(magazine, "sit ad est sint in in in in"); // returns false