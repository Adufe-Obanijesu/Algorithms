// function to perform to multiply two sets

function cartesian(arr1, arr2) {
    let result = [];

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }

    return result;
}

console.log(cartesian([1,2], [3,4])); // response => [[1,3], [1,4], [2,3], [2,4]]