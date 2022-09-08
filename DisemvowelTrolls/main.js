function disemvowel(str) {
    return str.replace(/[aoeiu]/gi, '');
}

let s = 'eeessee';

console.log(disemvowel(s));