function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}


let a = 'abcdef';
console.log(solution(a));
