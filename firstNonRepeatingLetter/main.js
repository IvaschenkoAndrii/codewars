//Мое решение, в котором не сравнивались большие и маленькие символы как разные

// function firstNonRepeatingLetter(s) {
//     let spited = s.split('');
//     return spited.find((element, index, array) =>
//         array.indexOf(element) === array.lastIndexOf(element)) || '';
// }


function firstNonRepeatingLetter(s) {
       if(s.length!==1) {return s.split('').find((ch, index, array) => {
        if(array.indexOf(ch.toLowerCase()) && array.indexOf(ch.toUpperCase())) {
            return  array.indexOf(ch) === array.lastIndexOf(ch)
        }

    }) ||''}
       else {
           return s[0];
       }
}

let str = '/../#';

console.log(firstNonRepeatingLetter(str));
