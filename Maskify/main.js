function maskify(cc) {
    let arr = cc.split('');
    let res = [];
    arr.map((value,index) =>{
            if(index<arr.length-4){
            value = '#';
            res.push(value);
        }
            else{
                value[index] = value;
                res.push(value);
            }}
);
    return  res.join('');
}

str = '123456234235';
console.log(maskify(str));