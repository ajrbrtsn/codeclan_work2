const Person = function(name, pet){
    this.name = name
    this.pet = pet
}

Person.prototype.greet = function(){
    return "Hi, my name is " +  this.name
}

Person.prototype.feedPet = function(food){
    console.log(`${this.name} fed ${this.pet.name} a ${food}`);
    this.pet.eat(food)
}

module.exports = Person

// const shaggy = new Person('Shaggy Rogers')
// const velma = new Person('Velma Dinkley')

// console.log(velma.greet());

