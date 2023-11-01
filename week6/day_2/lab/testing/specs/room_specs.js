const assert = require('assert')
const Room = require ('../room.js')

describe ('Room', function(){
    
    let room
    beforeEach(function(){
        room = new Room(16)
    })
    it('should have an area', function(){
        assert.strictEqual(room.area, 16)
    })
    it('should start unpainted', function(){
        assert.strictEqual(room.isPainted, false)
    })
    it('should be able to be painted', function(){
        room.paintRoom()
        assert.strictEqual(room.paintRoom, true);
    })
});