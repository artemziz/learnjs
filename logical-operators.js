let age=100;
if(age>=14&&age<=90)alert('yes')
else alert('no');

let login=prompt("Введите ваш логин");
if(login=="Админ"){
    let password=prompt("Введите ваш пароль");
    if(password=="Я главный")alert("Здравствуйте!")
    else if(password==null)alert("Отменено")
    else alert("Неверный пароль");
}
else if(login==null) alert("Отменено")
else alert("Я вас не знаю");