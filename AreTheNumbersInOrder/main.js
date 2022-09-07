function inAscOrder(arr) {
    let res = arr.filter((value, index, array) => array[index + 1] < array[index]);
    return !res.length;
}


arraay = [1, 6, 10, 18, 2, 4, 20];
console.log(inAscOrder(arraay));