function generateHashtag(str) {
    let splited = str.split(' ').filter(value => value.length !== 0).map(value=> value[0].toUpperCase() + value.slice(1)).join('');
    if (splited.length !== 0 && splited.length < 140 && splited[0]!=='#') {
        return '#'+splited;
    } else if(splited.length !== 0 && splited.length < 140 && splited[0]==='#'){
        return '#'+splited[1].toUpperCase()+splited.slice(2);
    }
    else {
        return false;
    }
}


s = '#dfgfsdg    sdfsg';
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