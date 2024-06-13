var dayHours = 24;
var myCat = {
    name: 'Fluffy',
    age: 3,
    isCute: true,
    color: 'white',
    hungry: 0,
    maxHungry: 10,
    eat: function () {
        // if (this.hungry === 0) {
        //   return console.log('El gato no tiene hambre')
        // } else {
        //   return console.log('El gato se va  morir del hambre que tiene')
        // }
        console.log('El gato esta comiendo');
        for (var i = 0; i < this.maxHungry; i++) {
            this.hungry = this.hungry - 1;
        }
        return console.log(this.hungry === 0 ? 'El gato no tiene hambre' : 'El gato se va morir de hambre!!');
    }
};
var count = 0;
for (var i = 0; i < dayHours; i++) {
    myCat.hungry = myCat.hungry + 1;
    if (myCat.hungry === myCat.maxHungry) {
        count++;
        myCat.eat();
    }
}
console.log("El gato comio ".concat(count, " veces"));
