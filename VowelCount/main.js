function getCount(str) {
    return ([...str].filter(value => value === 'a' || value === 'o' || value === 'e' || value === 'i' || value === 'u')).length;
}


str = 'abracadabrao';
console.log(getCount(str));