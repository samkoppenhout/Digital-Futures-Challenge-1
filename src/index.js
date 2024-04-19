import airport from "../src/airport.js"

let plane1 = {ID: 1}, plane2 = {ID: 2}, plane3 = {ID: 3}, plane4 = {ID: 4}, plane5 = {ID: 5}

airport.setCapacity(2);
console.log(airport.planeList)
airport.addPlane(plane1);
console.log(airport.planeList)
airport.addPlane(plane2);
console.log(airport.planeList)
airport.addPlane(plane3);
console.log(airport.planeList)
airport.removePlane(plane2);
console.log(airport.planeList)
airport.addPlane(plane3);
airport.setCapacity(8);
console.log(airport.planeList)
airport.addPlane(plane4);
console.log(airport.planeList)
airport.removePlane(plane3);
console.log(airport.planeList)
airport.removePlane(plane1);
console.log(airport.planeList)
airport.addPlane(plane5);
console.log(airport.planeList)