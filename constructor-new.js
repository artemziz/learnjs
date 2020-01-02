// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// function Calculator(){

//     this.read=function(){
//        this.a=Number(prompt("a"));
//        this.b=Number(prompt("b"));
//     }

//     this.sum=()=>{return this.a+this.b}
//     this.mul=()=>{return this.a*this.b}
// }
let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений
function Accumulator(startingValue){
    this.value=+startingValue;

    this.read=function(){
        let value=+prompt("value");
        this.value+=value;
    }
}