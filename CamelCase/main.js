function toCamelCase(str) {
    let pattern = /-|_/;
    let splited = str.split(pattern);
    let capital = splited.map((value, index) =>
        index > 0 ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : value)
    let res = capital.join('');
    return res;
}

console.log(toCamelCase(''));;
console.log(toCamelCase('the_stealth_warrior'));;
toCamelCase('The-Stealth-Warrior');
toCamelCase('A-B-C');