import chalk from 'chalk';

import airport from "../src/airport.js";

let plane1 = {Name: "Plane 1"}, plane2 = {Name: "Plane 2"}, plane3 = {Name: "Plane 3"}, plane4 = {Name: "Plane 4"}, plane5 = {Name: "Plane 5"}

console.log(chalk.blue("In this demonstration there are 5 planes, named Plane 1 to Plane 5."));
console.log("-----------");

console.log("Setting plane capacity to 2.");
airport.setCapacity(2);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log("-----------");

console.log("Adding plane 1 to airport.");
airport.addPlane(plane1);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log("-----------");

console.log("Adding plane 2 to airport.");
airport.addPlane(plane2);
console.log("-----------");

console.log("Displaying current contents of airport:")
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log("-----------");

console.log("Adding plane 3 to airport.");
airport.addPlane(plane3);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.red("This would put the airport over capacity so the plane was not added!"))
console.log("-----------");

console.log("Removing plane 2 from airport.");
airport.removePlane(plane2);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log("-----------");

console.log("Adding plane 3 to airport.");
airport.addPlane(plane3);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.green("Now that the airport is below capacity, plane 3 can be added!"));
console.log("-----------");

console.log(chalk.blue("Setting plane capacity to 8."));
airport.setCapacity(8);
console.log("-----------");

console.log("Adding plane 4 to airport.");
airport.addPlane(plane4);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.green("Now that the airport capacity is higher, another plane can be added!"))
console.log("-----------");

console.log(chalk.blue("Setting the weather to stormy"));
airport.isStormy = true;
console.log("-----------");

console.log("Removing plane 3 from airport.");
airport.removePlane(plane3);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.red("As the weather is stormy, the plane was not removed!"));
console.log("-----------");

console.log("Adding plane 2 to airport.");
airport.removePlane(plane2);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.red("As the weather is stormy, the plane was not added!"));
console.log("-----------");

console.log(chalk.blue("Setting the weather back to not-stormy"));
airport.isStormy = false;
console.log("-----------");

console.log("Adding plane 5 to airport.");
airport.addPlane(plane5);
console.log("-----------");

console.log("Displaying current contents of airport:");
airport.planeList.forEach(plane => { console.log(plane.Name) });
console.log(chalk.green("Now that the weather is not stormy, another plane can be added!"));
console.log("-----------");