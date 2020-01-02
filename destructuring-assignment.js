// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// let {name,years:age,isAdmin=false} = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalary(salaries){
    let name,salary=0;
    if(Object.keys(salaries).length!=0){

     for(let emp of Object.entries(salaries)){
         console.log(salary);
         if(emp[1]>salary) [name,salary]=emp;
     }

    }else return null;
    return name;
}
alert(topSalary(salaries));
