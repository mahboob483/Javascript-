/*let heroes=["mahboob","khan","apna college","badsha"];
/*for(idx = 0 ;idx < heroes.length ; idx++){
    console.log(heroes[idx])
}
for(let hero of heroes){
    console.log(hero.toUpperCase());
}*/
let marks = [50 ,60 , 70 ,75 , 80 ,90 ];
let sum = 0;
for (let val of marks ){
    sum += val;

}
let avg = sum / marks.length;
console.log(`average marks of the class = ${avg}`);