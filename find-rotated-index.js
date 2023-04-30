function findRotatedIndex(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;

    while (leftIdx < rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] > arr[rightIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx;
        }
    }

    let pivotIdx = leftIdx;
    leftIdx = 0;
    rightIdx = arr.length - 1;

    if (arr[pivotIdx] <= val && val <= arr[rightIdx]) {
        leftIdx = pivotIdx;
    } else {
        rightIdx = pivotIdx;
    }

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            leftIdx = middleIdx + 1
        } else if (middleVal > val) {
            rightIdx = middleIdx - 1;
        } else {
            return middleIdx;
        }
    }

    return -1;
}

module.exports = findRotatedIndex