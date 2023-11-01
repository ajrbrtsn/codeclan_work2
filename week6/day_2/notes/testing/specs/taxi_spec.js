const assert = require('assert')
const Taxi = require('../taxi.js')

describe('Taxi', function(){

    let taxi
    this.beforeEach(function(){
        taxi = new Taxi('Toyota', 'Prius')
    })

    it('should have a manufacturer', function(){
        //arrange
        // const taxi = new Taxi('Toyota', 'Prius')
        //act
        const actual = taxi.manufacturer;
        //assert
        assert.strictEqual(actual, 'Toyota')
    })

    it('should have a model', function(){
        // const taxi = new Taxi('Toyota', "Prius")
        const actual = taxi.model;
        assert.strictEqual(actual, 'Prius');
    })


    it('should start with no passengers', function(){
        const actual = taxi.passengers;
        assert.deepStrictEqual(actual, [])
    })

    it('should add a passenger', function(){
        taxi.addPassenger('Mike')
        const actual = taxi.numberOfPassengers()
        assert.strictEqual(actual, 1)
    })
})

