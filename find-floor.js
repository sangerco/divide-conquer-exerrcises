function findFloor(arr, val) {

    if (arr[0] > val) {
        return -1;
    }

    let leftIdx = 0
    let rightIdx = arr.length - 1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] < val) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx;
        } 
    }


    if (arr[leftIdx] === val) {
        return val;
    }

    if (arr[leftIdx] > val) {
        return arr[leftIdx - 1];
    }

    if (arr[leftIdx] < val) {
        return arr[leftIdx];
    }


}

module.exports = findFloor