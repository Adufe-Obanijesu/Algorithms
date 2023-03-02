const arr = [5,-6,20,-2,4,8];

function insertionSortAscending(arr) {

    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j - 1;
        }

        arr[j+1] = numberToInsert;
    }
    console.log(arr)
}

insertionSortAscending(arr);


function insertionSortDescending(arr) {
    for(let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;

        while(j>=0 && numberToInsert > arr[j]) {
            arr[j+1] = arr[j]
            j--;
        }

        arr[j+1] = numberToInsert;
    }
    console.log(arr);
}

insertionSortDescending(arr);