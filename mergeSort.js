const arr = [5,-6,20,-2,4,8];

function mergeSort(arr) {

    if(arr.length < 2) {
        return arr;
    }

    let middle = Math.floor(arr.length/2);
    let leftArr = arr.slice(0,middle);
    let rightArr = arr.slice(middle);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArray = [];

    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArray.push(leftArr.shift());
        } else {
            sortedArray.push(rightArr.shift());
        }
    }
    return [...sortedArray, ...leftArr, ...rightArr];
}

mergeSort(arr);