function firstNonRepeatingLetter(s) {
    let spited = s.split('');
    return spited.find((element, index, array) => array.indexOf(element) === array.lastIndexOf(element))||'';
}

let str = 'sTreSS';

console.log(firstNonRepeatingLetter(str));
