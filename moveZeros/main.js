function moveZeros(arr) {
   let filtered= arr.filter(value => value !== 0);
   return filtered.concat(Array(arr.length - filtered.length).fill(0));
}

arr = [1, 0, 1, 3, 4, 0, 0];
console.log(moveZeros(arr));



// var moveZeros = function (arr) {
//     return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
// }


// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
// }