const Decorator = function (){
    this.paintStock = []
}
Decorator.prototype.addPaintCan = function(paintCan){
    this.paintStock.push(paintCan)
}
Decorator.prototype.getTotalPaint = function(){
    let total = 0
    for(let can of this.paintStock){
        total += can.volume
    }
    return total
}
Decorator.prototype.canPaintRoom = function(room){
    if (this.getTotalPaint() >= room.area){
        return true
        }
        return false
}
Decorator.prototype.paintRoom = function(room){
    if(this.canPaintRoom(room) && room.isPainted === false){
        room.isPainted = true
        this.reducePaint(room)
    }
}
Decorator.prototype.reducePaint = function(room){
    let newStock = []
    let areaToPaint = room.area
    for(let can of this.paintStock){
        if(can.volume > areaToPaint){
            can.volume -= areaToPaint
            newStock.push(can)
        }
        areaToPaint -= can.volume
    }
    this.paintStock = newStock
}


module.exports = Decorator