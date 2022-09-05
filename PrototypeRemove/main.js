// Array.prototype.remove_ = function(integer_list, values_list){
//     for (let i = integer_list.length-1; i >=0; i--) {
//         for (let j = 0; j < values_list.length; j++) {
//             if (integer_list[i] === values_list[j]) {
//                 integer_list.splice(i, 1);
//             }
//         }
//     }
//     return integer_list;
// }

Array.prototype.remove_ = (x, y) => x.filter(e => !y.includes(e)); //альтернативный вариант

let int = [1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8]
let val = [1, 3, 4, 2]


console.log(Array.prototype.remove_(int, val));