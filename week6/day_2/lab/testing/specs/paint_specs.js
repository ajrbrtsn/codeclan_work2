const assert = require ('assert')
const PaintCan = require ("../paint.js")

describe('paintcan', function(){
    let paintCan
    beforeEach(function(){
        paintCan = new PaintCan(10)
    })
    it('should contain paint', function(){
        assert.strictEqual(paintCan.volume, 10)
    })
    it('should be able to check if empty', function(){
        paintCan = new PaintCan(0)
        result = paintCan.isEmpty()
        assert.strictEqual(result, true)
    })
    it('should be able to empty itself', function(){
        paintCan.empty()
        result = paintCan.isEmpty()
        assert.strictEqual(result, true)
    })
}) 