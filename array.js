// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// let styles=['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[Math.floor(styles.length/2)]='Классика';
// alert(styles.shift());
// styles.unshift('Рэп', 'Регги');
// alert(styles);
// function sumInput(){
//     let value;
//     let arr=[];
//     let sum=0;
//     while(true){
//         value = prompt("value");

//         if(!isFinite(+value)||value==''||value==null) break;

//         arr.push(value);
//     }

//     for(let a of arr){
//         sum+=+a;
//     }
//     return sum;
// }
// alert(sumInput());

function getMaxSubSum(arr) {

}
getMaxSubSum([-1, 2, 3, -9])// = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9])// = 6
getMaxSubSum([-1, 2, 3, -9, 11]) //= 11
getMaxSubSum([-2, -1, 1, 2]) //= 3
getMaxSubSum([100, -9, 2, -3, 5])// = 100
getMaxSubSum([1, 2, 3]) //= 6 (берём все)
