function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length-1];
    let leftArr = [];
    rightArr = [];
    for(let i = 0; i < arr.length-1; i++) {
        if(pivot > arr[i]) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}


const arr = [2,3,1,5,7,4,9,8];
console.log(quickSort(arr))