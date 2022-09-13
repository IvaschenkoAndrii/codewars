function rentalCarCost(d) {
    let price = 0;
if (d<3){
    price = d * 40;
}
else if(d>=3 && d<7){
    price = d * 40 - 20;
}
else price = d * 40 - 50;
    return price;
}

d = 3;
console.log(rentalCarCost(d));