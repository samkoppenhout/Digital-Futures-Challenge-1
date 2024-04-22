# Domain Models and Test Plan

MAKE SURE TO ADD A CAPACITY LIMIT TO MORE THAN OR EQUAL TO THE NUMBER OF PLANES CURRENTLY AT THE AIRPORT

Core Features:
User stories:

1.  As an airport official
    I would like to set the maximum capacity of the airport
    So I can decide how many planes should be able to land at any time

2.  As an air traffic controller
    I would like to be able to check if the airport is full
    So I don't let a plane land if it is at capacity

3.  As an air traffic controller
    I would like to check that if a plane is at the airport
    So I don't add duplicate planes to the airport and I know whether a plane is able to take off

4.  As an air traffic controller
    I would like to add a plane to the airport model
    So that I can track the instruction for it to land

5.  As an air traffic controller
    I would like to remove a plane from the airport model
    So I can track the instruction for it to take off

call start and test in the package.json

import .basket.spec.js in the specrunner (thats all you need)
