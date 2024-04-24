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

Additional features:

1. Prevent Landing in Stormy Weather
   As an Airport operator
   I want to prevent planes from landing if the weather is stormy
   So that I can ensure the safety of incoming planes

   Acceptance Criteria:
   Given that the weather is stormy
   When a Plane attempts to land at the Airport
   Then the Plane should not be able to land

2. Prevent Takeoff in Stormy Weather
   As an Airport operator
   I want to prevent planes from taking off if the weather is stormy
   So that I can ensure the safety of outgoing planes

   Acceptance Criteria:
   Given that the weather is stormy
   When a Plane attempts to take off from the Airport
   Then the Plane should not be able to take off
