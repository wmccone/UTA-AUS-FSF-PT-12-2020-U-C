// TODO: Import the parent class
const Vehicle = require('./vehicle')
// TODO: Create a `Car` class that extends the `Vehicle` class

class Car extends Vehicle {
  constructor(id, color, passenger){
    super(id, 4, 'beep')
    this.color = color
    this.passenger = passenger
  }
 useHorn(){
   console.log(this.sound)
 } 
 checkPassengers(){
   console.log(this.passenger)
 }
    
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
