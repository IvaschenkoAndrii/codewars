// function arrange(s) {
//     let res = [];
//     let l = s.length/2;
//     for (let i = 0; i < l; i++) {
//         s.length !== 1 ? res.push(s[0], s[s.length - 1]) : res.push(s[0]);
//         s = s.slice(1, s.length - 1).reverse();
//     }
//     return res;
// }


function arrange(s) {
    let res = [];
    let counter = 0;
    let l = s.length/2;
    for (let i = 0; i < l; i++) {
        counter++;
        s.length !== 1 ? (counter%2?res.push(s[0], s[s.length - 1]) : res.push(s[s.length-1],s[0])) : res.push(s[0]);
        s.pop();
        s.shift();
    }
    return res;
}

// const arrange = (s, l = s.length - 1) => s.map((_, i) => s[i + 1 & 2 ? l - (i >> 1) : i >> 1]);

let a = [-2,5,1,-10,2,-9,-1,-2,-2,3,-10,-4,4,6];
console.log(arrange(a));