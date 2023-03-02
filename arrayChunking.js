// Given an array and a size, split the array items into a list of arrays of the given size.

function arrayChunking(arr, size) {
    let chunkedArray = [];
    for(let i = 0; i < arr.length; i = i + size) {
        let chunk = arr.slice(i, i+size);
        chunkedArray.push([...chunk]);
    }

    return chunkedArray;
}

console.log(arrayChunking([1, 2, 3, 4], 2)); // response => [[1,2], [3,4]]