// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
  
//   alert( sumSalaries(salaries) ); // 650
//   function sumSalaries(salaries){
//       let sum=0;

//       for(let salary of Object.values(salaries)){
//           sum+=salary;
//       }

//       return sum;
//   }

let user = {
    name: 'John',
    age: 30
  };
  let count = (obj) =>Object.keys(obj).length;
  alert( count(user) ); // 2
 