function generateHashtag(str) {
    let splited = str.split(' ');
    let filtered = splited.filter(value => value.length !== 0);
    let cap = filtered.map(value=> value[0].toUpperCase() + value.slice(1));
    let res1 = cap.join('');
    if (res1.length !== 0 && res1.length < 140 && res1[0]!=='#') {
        return '#'+res1;
    } else if(res1.length !== 0 && res1.length < 140 && res1[0]==='#'){
        return '#'+res1[1].toUpperCase()+res1.slice(2);
    }
    else {
        return false;
    }
}


s = '#as    dfsdf';
console.log(generateHashtag(s));

// Альтернативные решения

// function generateHashtag (str) {
//     return str.length > 140 || str === '' ? false :
//         '#' + str.split(' ').map(capitalize).join('');
// }
//
// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function generateHashtag (str) {
//     if(!str || str.length < 1) return false;
//
//     var r = '#' + str.split(' ').map(function(el) {
//         return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
//     }).join('');
//     return r.length > 140?false:r;
// }