class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Car extends Vehicle {
    constructor(make, model, regNo, fuelType) {
        super(make, model);
        this.regNo = regNo;
        this.fuelType = fuelType;
    }
    
}

let cObj1 = new Car("Hundai", "i10", "KA01-6447", "Petrol");
console.log(cObj1.fuelType)