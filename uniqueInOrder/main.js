var uniqueInOrder=function(iterable) {
    let res = [];
    if (typeof iterable==='string'){
        split=iterable.split('');
        // sort = split.sort();
        for (let i = 0; i < split.length; i++) {
            if (iterable[i] !== iterable[i + 1]) {
                res.push(iterable[i]);
            }
        }}
        else{
    // sort = iterable.sort();
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            res.push(iterable[i]);
        }}
    }
    return res;
}

arr = ['A','A','D','A','c'];
arr2 = ['A', 'B', 'C', 'D', 'A', 'B'];
arr3=[ 'A', 'B', 'C', 'c', 'A', 'D' ]
console.log(uniqueInOrder(arr));