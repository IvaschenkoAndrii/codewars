function firstNonRepeatingLetter(s) {
    let lowerCase = s.toLowerCase();
    return [...lowerCase].find((n, i, a) => a.indexOf(n) === a.lastIndexOf(n)) || ''
}

let str = 'sTreSS';

console.log(firstNonRepeatingLetter(str));
