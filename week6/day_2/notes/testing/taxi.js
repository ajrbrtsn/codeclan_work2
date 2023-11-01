const Taxi = function(manufacturer, model){
    this.manufacturer = manufacturer
    this.model = model
    this.passengers = []
}

Taxi.prototype.addPassenger = function(passenger){
    this.passengers.push(passenger)
}

Taxi.prototype.numberOfPassengers = function(){
    return this.passengers.length;
}


module.exports = Taxi;