const dayHours: number = 24

interface Cat {
  name: string
  age: number
  isCute: boolean
  color: string
  hungry: number
  maxHungry: number
  eat: () => void
}

const myCat: Cat = {
  name: 'Fluffy',
  age: 3,
  isCute: true,
  color: 'white',
  hungry: 0,
  maxHungry: 10,
  eat: function() {
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

let count = 0

for (let i = 0; i < dayHours; i++) {
  myCat.hungry = myCat.hungry + 1
  if (myCat.hungry === myCat.maxHungry) {
    count++
    myCat.eat()
  }
}

console.log(`El gato comio ${count} veces`)
