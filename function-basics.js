'use strict';
function pow(x, n){
let result=1;

    for(let i=0;i<n;i++){
        result*=x;
        
    }
    
    return result;
}

let x = prompt("x");
let n = prompt("n");
let result = ((n>=1)&&(n%1==0))?pow(x, n):false;
result?alert(result):null;