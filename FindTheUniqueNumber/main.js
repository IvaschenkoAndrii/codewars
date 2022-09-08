function findUniq(arr) {
   return (arr.filter((value, index, array) => array.indexOf(value) === array.lastIndexOf(value)))[0];
}

let s = [1,0,0];
console.log(findUniq(s));