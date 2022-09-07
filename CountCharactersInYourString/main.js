function count (string) {
    return [...string].reduce(function (acc, el) {
        acc[el] = ((acc[el]) || 0) + 1
        return acc;
    }, {});
}

console.log(count(''));



//Альтернативные решения

// function count (string) {
//     var count = {};
//     string.split('').forEach(function(s) {
//         count[s] ? count[s]++ : count[s] = 1;
//     });
//     return count;
// }

// function count (string) {
//     return string.split("").reduce(function(obj, elem) {
//         if (elem in obj)
//             obj[elem]++;
//         else
//             obj[elem] = 1;
//         return obj;
//     }, {});
// }