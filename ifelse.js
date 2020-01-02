

let answer=prompt("Какое «официальное» название JavaScript?");
if(answer=="ECMAScript"){
    alert("Верно");
}else{
alert("Не знаете? ECMAScript!");
}

let num=prompt("Введите число");
if(num>0)alert(1)
else if(num<0)
alert(-1)
else alert(0);


let message;
let login='';
message = (login == 'Сотрудник')?'Привет': 
(login == 'Директор')?'Здравствуйте':
 (login == '')?'Нет логина':'';