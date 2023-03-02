// Program to search for a target element using the binary search.
//If item is found, return the index and if not found return -1

let array = [2,4,6,8,10,12,14];

function binarySearch(arr, target) {
    
    leftIndex = 0;
    rightIndex = arr.length - 1;
    
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(arr[middleIndex] === target) {
            return middleIndex;
        }
        if(arr[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

function binarySearchUsingRecursion(arr, target, leftIndex = 0, rightIndex = array.length - 1) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if(arr[middleIndex] === target) {
        return middleIndex;
    }

    if (arr[middleIndex] > target) {
        rightIndex = middleIndex - 1;
    } else {
        leftIndex = middleIndex + 1;
    }
    if(leftIndex <= rightIndex) {
        return binarySearchUsingRecursion(arr, target, leftIndex, rightIndex);
    }
    return -1;
}


console.log(binarySearch(array, 6)); // response => 2
console.log(binarySearch(array, 2)); // response => 0
console.log(binarySearch(array, 4)); // response => 1
console.log(binarySearchUsingRecursion(array, 10)); // response => 5
console.log(binarySearchUsingRecursion(array, 14)); // response => 6
console.log(binarySearchUsingRecursion(array, 63)); // response => -1