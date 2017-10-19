var events = require("events");
function CarShow() {
    events.EventEmitter.call(this);
    this.seeCar = function (make, year) {
        this.emit("sawcar", make, year);
    };
}
CarShow.prototype.__proto__ = events.EventEmitter.prototype;
var show = new CarShow();
function logCar(make, year) {
    console.log("Saw a " + make + year);
}
function logColorCar(make, color, year) {
    console.log("Saw a %s %s %s", color, make, year);
}
show.on("sawcar", logCar);
show.on("sawcar", function (make, year) {
    var colors = ['red', 'blue', 'black'];
    var color = colors[Math.floor(Math.random()*3)];
    logColorCar(make, color, year);
});

show.seeCar("Ferrari", 1993);
show.seeCar("Porsche", 1233);
show.seeCar("Bugatti", 2994);
show.seeCar("Lamborghini", 2888);
show.seeCar("Aston Martin", 2999);