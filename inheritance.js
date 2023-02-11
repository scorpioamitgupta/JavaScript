/*
Inheritance: Process where one class acquires properties
(methods and fields) from another class

Parent Class --> child
Super Class --> sub
Base Class --> derived


*/

class Car{

    setName (name) {
        this.name = name;

    }
    startEngine () {
     console.log('Engine started for '+ this.name);  
     
    }
    stopEngine () {
        console.log('Engine stopped for '+ this.name);  
        
       }
       
}
class Toyota extends Car{   //extends is the keyword for Inheritance
    topSpeed(speed)   {  
    console.log(' Top speed for ' +this.name +' is ' + speed +' miles per hr ');
}
}

let myCar = new Toyota();
myCar.setName ('CAMRY');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(100);
