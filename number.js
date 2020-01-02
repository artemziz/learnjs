// let a=+prompt("a");
// let b=+prompt("b");
// let sum=a+b;
// alert(sum.toFixed(2));
// function readNumber(){
//     let value;
//     do{
//         value=prompt("value");
//     }while(isNaN(value));
    
   
    
    
//     if(value==''||value==undefined)return null;
//     else return +value;

// }
// alert(readNumber());
// function random(min, max){
//     let result=min+Math.random()*(max-min);
//     return result;
// }
// alert(random(1,5));
function randomInteger(min, max){
    return Math.round(min-0.5+Math.random()*(max-min+1));
}
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5