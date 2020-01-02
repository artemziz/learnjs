// function ucFirst(str){
//     if(str!='')return str[0].toUpperCase()+str.slice(1);
//     else return str;
// }
// alert(ucFirst("value"));


// function checkSpam(str){
//     let v='viagra';
//     let x='xxx';
//     let str1=str.toLowerCase();
//     if(str1.includes(v)
//     ||str1.includes(x))
//     {
//         return true;
//     }else{
//         return false;
//     }
// }

// alert(checkSpam('buy ViAgRA now')); //== true
// alert(checkSpam('free xxxxx')); //== true
// alert(checkSpam("innocent rabbit"));// == false
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //= "Вот, что мне хотело…"

// alert(truncate("Всем привет!", 20))// = "Всем привет!"
// function truncate(str,maxlength){
//     if(str[maxlength-1]!=undefined) return str.slice(0,maxlength-1)+'…';
//     else return str;
// }
function extractCurrencyValue(str){
    return +str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 ); // true