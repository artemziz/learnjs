// alert(sum(1)(2))// = 3
// alert(sum(5)(-1)) //= 4
// function sum(a){
//     return function(b){
//         return a+b;
//     }
// }

// function inBetween(a,b){
//     return function(num){

//        if(num>=a && num<=b) return num;

//     }
// }

// function inArray(fArray){
//     return function(num){
    
//         if(fArray.includes(num))return num;
//     }
    
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];

// //alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

  // по имени (Ann, John, Pete)
//users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
//users.sort((a, b) => a.age > b.age ? 1 : -1)

// users.sort(byField('name'));
// users.forEach(element => {
//     alert(element.name);
// });

// users.sort(byField('age'));
// users.forEach(element => {
//     alert(element.name);
// });


// function byField(fieldName){
//     if(fieldName=='name') return function(a,b){
//         return a.name > b.name ? 1 : -1;
//     }
    
//     if(fieldName=='age') return function(a,b){
//         return a.age > b.age ? 1 : -1;
//     }
//     //лучше так!
//     // function byField(field) {
//     //     return (a, b) => a[field] > b[field] ? 1 : -1;
//     //   }
// }


function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let shooter = function() { // функция shooter
        alert( shooter.number ); // должна выводить порядковый номер
        
        
        
        
      };
      shooter.number = i;
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0](); // у 0-го стрелка будет номер 10
  army[5](); // и у 5-го стрелка тоже будет номер 10
  // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...