// outer:for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         let input=prompt(`Введите значение(${i},${j})`,'');
//         if (!input) break outer;
//     }
// }
// alert("Готово!");
// for(let i=1;i<11;i++){
//     if(i%2==0)alert(i);
// }
// let i=0;
// while(i<3){
//     alert( `number ${i}!` );
//     i++;
// }
// let value=prompt("Введите число");
// if(value<=100){
//     while(value<=100){
//         value=prompt("Введите число");
//     }
// }
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}