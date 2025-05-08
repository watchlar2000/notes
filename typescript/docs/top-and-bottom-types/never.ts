class UnreachableError extends Error {
  constructor(_never: never, message: string) {
    super(message);
  }
}

class Truck {
  constructor(public name: string) {}
}

class Car {
  constructor(public name: string) {}
}

class Bike {
  constructor(public name: string) {}
}

type Vehicle = Truck | Car | Bike;

let myVehicle: Vehicle = new Truck('Truck');

if (myVehicle instanceof Truck) {
  console.log(myVehicle.name);
} else if (myVehicle instanceof Car) {
  console.log(myVehicle.name);
} else {
  throw new UnreachableError(
    myVehicle,
    `Unexpected vehicle type: ${myVehicle}`,
  ); // In case when new types added to type Vehicle, TS will let us know about missing cases
}
