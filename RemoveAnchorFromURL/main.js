function removeUrlAnchor(url){
    return url.split('#')[0];
}

let u = 'asfsdfdsfsdf#asdvsdv';
console.log(removeUrlAnchor(u));