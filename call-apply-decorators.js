'use strict'
// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9
// console.log(work.calls);
// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function spy(func){
  
//   function wrapper(...args){
//      wrapper.calls.push(args);
//      return func.apply(this,args);
//   }
//   wrapper.calls = [];
//      return wrapper;
  
// }

// let fac = function(n){
//   return n>1?fac(n-1)*n:n;
// }
// function facWrap(func){
//   return function(){
//     let result = func.apply(this, arguments);
//     console.log(result);
//     return result;
//   }
// }
// fac = facWrap(fac);
// fac(5);

      
  
// function f(x) {
//   alert(x);
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// function delay(func,delay){
//   return function(){
    
//   setTimeout(() =>func.apply(this,arguments),delay);
    
//   }
// }

// let f = debounce(alert, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

// function debounce(func,delay){

//   let check = true;
//     let timer = 0;
//   return function(){
    
    
//     if(check){
//     timer = setTimeout(() =>(timer = 0,check = true),delay);
//     check = false;

//     return func.apply(this,arguments)
//     }
//   }

 

// }


function f(a) {
  console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

  function throttle(func,delay){

        let check = true;
        let timer = 0;
        
      function wrapper(){
        
        
        if(check){
        timer = setTimeout(() =>(timer = 0,check = true),delay);
        check = false;
        lastThis = this;
        lastArgs = arguments;

        return func.apply(this,arguments)

        
        }
}
}


