function reverseWords(str){
    return str.split(" ").reverse().join(' ');
}

let w = 'Hello world its me';
console.log(reverseWords(w));