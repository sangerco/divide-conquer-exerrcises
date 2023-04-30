function countZeroes(arr) {

    let count = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            count++;
        } 

        if (arr[i] === 1) {
            break;
        }
    }

    return count;
  
}

module.exports = countZeroes