let count = 0
const dayHours = 24

const myCat = {
  name: 'Fluffy',
  age: 3,
  isCute: true,
  color: 'white',
  hungry: 0,
  maxHungry: 10,
  eat: function() {
    console.log('Estas son las horas del día', dayHours)
    // if (this.hungry === 0) {
    //   return console.log('El gato no tiene hambre')
    // } else {
    //   return console.log('El gato se va  morir del hambre que tiene')
    // }
    console.log('El gato esta comiendo')
    for (let i = 0; i < this.maxHungry; i++) {
      this.hungry = this.hungry - 1
    }
    
    return console.log(this.hungry === 0 ? 'El gato no tiene hambre' : 'El gato se va morir de hambre!!')
  }
}


const random = Math.floor(Math.random() * 10)
console.log('Esto es un numero random ',random)
for (let i = 0; i < dayHours; i++) {
  myCat.hungry = myCat.hungry + 1
  if (myCat.hungry === myCat.maxHungry) {
    count++
    myCat.eat()
  }
}


console.log(`El gato comio ${count} veces`)
