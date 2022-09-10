function isAlt(word) {
    return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}

s = 'asa';
console.log(isAlt(s));