const Pet = require('./pet.js')
const Person = require('./person.js')

const scooby = new Pet('Scooby Doo', 'Dog')
// scooby.eat('Scooby Snack')

const shaggy = new Person('Shaggy Rogers', scooby)
console.log(shaggy.greet());
shaggy.feedPet('Scooby Snack')