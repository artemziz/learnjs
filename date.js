'use strict'
// let date = new Date("2012-02-20,3:12");
// alert(date);

// let date = new Date(2012, 0, 3); 
//  // 3 января 2012 года
// alert( getWeekDay(date) );   
//      // нужно вывести "ВТ"
// function getWeekDay(date){
    
//     switch(date.getDay()){
//        case 0 : return("ВС");
//        case 1 : return("ПН");
//        case 2 : return("ВТ");
//        case 3 : return("СР");
//        case 4 : return("ЧТ");
//        case 5 : return("ПТ");
//        case 6 : return("СБ");
//        default : return("Ощибка");
// //было легче через массив с днями недели
//     }
// }

// let date = new Date(2014, 0, 5);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

// function getLocalDay(date){
//     if(date.getDay()==0) return 7;
//     else return date.getDay();
    
// }

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getDateAgo(date,days){
//     let result = new Date(date);
//     result.setDate(result.getDate()-days);
//     return result.getDate();
// }

// getLastDayOfMonth(2012, 1) //= 29

// function getLastDayOfMonth(year,month){
//     let date = new Date(year,month+1,0);
//     return(date.getDate());
// }

// function getSecondsToday(){

//     let now = new Date();
//     return now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();

// }

// // alert(getSecondsToday()) //== 36000 // (3600 * 10)

// alert(getSecondsToTomorrow()) //== 3600

// function getSecondsToTomorrow(){

//     let now = new Date();
//     return 86400 - getSecondsToday();
// }

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date){
    let diff = new Date()-date;
    if(diff<1000){
        return "прямо сейчас";
    }
    let sec = Math.floor(diff/1000);
    if(sec<60){
        return sec+ ' сек. назад';
    }
    let min = Math.floor(sec/60);
    if(min<60){
        return min + ' мин. назад';
    }
    let result = [
        '0'+date.getDate(),
        '.',
        '0'+(date.getMonth()+1),
        '.',
        date.getFullYear(),
        ' ',
        '0'+date.getHours(),
        ':',
        '0'+date.getMinutes()
        ].map(item =>item.length==3?item.slice(-2):item).join('');
        return result;
   
};