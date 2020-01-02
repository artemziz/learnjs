function printNumbers(from, to){
    // let timerId = setInterval(function(){
    //     if(from <= to){
    //         alert(from++);
    //     }else{
    //         clearInterval(timerId);
    //     }

    // },1000)

    let timerId = setTimeout(function num(){
        alert(from++);
        from <= to?setTimeout(num(),1000):clearTimeout(timerId);
    },1000)
   

}

printNumbers(1,5);