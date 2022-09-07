function inAscOrder(arr) {
    return !(arr.filter((value, index, array) => array[index + 1] < array[index])).length;
}


arraay = [1, 6, 10, 18];
console.log(inAscOrder(arraay));