function oddOrEven(array) {
    let num = 0;
    array.forEach(item=> num=num+item)
    return num % 2 ? str = 'odd': str ='even';
}

arr = [];
oddOrEven(arr);