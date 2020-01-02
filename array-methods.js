// alert(camelize("background-color"))// == 'backgroundColor';
// alert(camelize("list-style-image")) //== 'listStyleImage';
// alert(camelize("-webkit-transition")) //== 'WebkitTransition';
// function camelize(str){
//     let array=str.split('-');
    
//     array=array.map(function(word,i){
//         if(i>0){
            
//             word=word[0].toUpperCase()+word.slice(1);
//         }
//         return word;
//     });
   
//     return array.join('');
// }
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)
// function filterRange(arr,a,b){
//     let filtered=[];

//     arr.forEach(function(num){
//         if(num>=a&&num<=b) filtered.push(num);
//     });

//     if(filtered.length==0) return arr;
//     else
//     return filtered;
// }
// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // удалить, если за пределами интервала
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//       //  i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
//   alert( arr ); // [3, 1]


// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b)=>b-a);

// alert( arr ); // 8, 5, 2, 1, -10

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
// function copySorted(arr){
//     let copyArr=arr.slice();
//     copyArr.sort();
//     return copyArr;
// }



// let powerCalc = new Calculator;
//  powerCalc.addMethod("*", (a, b) => a * b);
//  powerCalc.addMethod("/", (a, b) => a / b);
//  powerCalc.addMethod("**", (a, b) => a ** b);
// let result=powerCalc.calculate('2 ** 3');
// alert(result);

// // let result = powerCalc.calculate("2 ** 3");
// // alert( result ); // 8
// function Calculator(){
//     this.methods = {
//         '+':(a,b) => a+b,
//         '-':(a,b) => a-b,
//     }
    
//     this.calculate = function(str){
    
//          str = str.split(' ');

//          if(this.methods[str[1]]) {
//              let result = this.methods[str[1]](+str[0],+str[2]);
//          return result;
        
//         }else return 'Ошибка';
         
//     }

//     this.addMethod = function(name,func){
//          this.methods[name] = func;
//     }

// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item =>({'fullName':item.name+' '+item.surname,'id':item.id}));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function sortByAge(arr){
//     arr.sort((a,b) => a.age>b.age?1:-1);
// }

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]
// alert(arr);
// shuffle(arr);
// // arr = [2, 1, 3]
// alert(arr);
// shuffle(arr);
// // arr = [3, 1, 2]
// alert(arr);
// function shuffle(arr){
//     arr.sort(() => Math.random()>0.5?1:-1);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
// function getAverageAge(arr){
//     let result = arr.reduce((sum,current) => sum+current.age,0);
//     result/=arr.length;
//     return result;
// }


function unique(arr) {
    let a=arr.slice();
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]==a[j]) {
                
                a.splice(j,1);
                j--;
                
            }
        }
    }
    return a;
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O
