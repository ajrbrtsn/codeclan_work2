const assert = require ('assert')
const Decorator = require ('../decorator.js')
const PaintCan = require ('../paint.js')
const Room = require ('../room.js')

describe('decorator', function(){
    let decorator
    beforeEach(function(){
        decorator = new Decorator()
    })
    it('should start with an empty paint stock', function(){
        assert.strictEqual(decorator.paintStock.length, 0)
    })
    it('should be able to add a can of paint to stock', function(){
        let paintCan = new PaintCan(10)
        decorator.addPaintCan(paintCan)
        assert.strictEqual(decorator.paintStock.length, 0)
    })
    it('should be able to calculate total litres of stock', function(){
        let paintCan = new PaintCan(10)
        decorator.addPaintCan(paintCan)
        decorator.addPaintCan(paintCan)
        decorator.addPaintCan(paintCan)
        result = decorator.getTotalPaint()
        assert.strictEqual(result, 30)
    })
    it('should be able to calculate if it has enough paint', function(){
        let room = new Room(25)
        let paintCan = new PaintCan(10)
        decorator.addPaintCan(paintCan)
        decorator.addPaintCan(paintCan)
        decorator.addPaintCan(paintCan)
        result = decorator.canPaintRoom(room)
        result = decorator.getTotalPaint()
        assert.strictEqual(result, true)
    })
    it('should be able to paint room', function(){
        
    })

})