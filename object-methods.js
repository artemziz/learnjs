let calculator = {

    read(){
     this.a=+prompt("a");
     this.b=+prompt("b");
    },

    sum(){
     return this.a+this.b;
    },

    mul(){
      return this.a*this.b;
    } 
};
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };

ladder.up().up().down().showStep(); // 1