function zeroPlentiful(arr){
    let groups = 0;
    let count = 0;

    for (let num of arr) {
        if (num === 0) {
            count ++;
        }
        if (num !== 0 && count > 0 && count < 4) {
            return 0;
        }
        if (num !== 0) {
            count = 0
        }
        if (count === 4) {
            groups ++;
        }
    }
    if (count > 0 && count < 4) {
        return 0;
    }

    return groups
}