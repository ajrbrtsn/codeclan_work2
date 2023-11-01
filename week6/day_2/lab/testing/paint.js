const PaintCan = function (volume) {
    this.volume = volume;
};

PaintCan.prototype.isEmpty = function(){
    if (this.volume === 0){
        return true
    }
        return false
};

 PaintCan.prototype.empty = function(){
    this.volume = 0;
};

module.exports = PaintCan;