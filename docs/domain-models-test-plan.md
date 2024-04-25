# Airport Challenge - Task 1

## Introduction

Air traffic control is an incredibly complex system which is, in a lot of cases, a key single point of failure for a large number of airports. Without the use of a software tool to track the take-off and landing of planes, it would be very difficult for airports to be able to keep track of their plane inventory and check if there is space for planes to land, especially for large airports with many flights. For example, London Heathrow has around 1300 take-offs and landings every day, accounting for over 19 million passengers a year, but only around 300 aircraft stands[1]; Without strict planning and tracking, there is a very real possibility that the airport could reach its maximum plane capacity multiple times in a day. This software makes this tracking significantly easier, representing significant savings in time and money for an airport.

## Key Features

- The capacity of the airport can be set and overridden.
- A plane can be instructed to land at an airport if the weather is not stormy, if the airport is not full and the plane is not already at the airport.
- A plane can be instructed to take off from an airport as long as it is currently at the airport and the weather is not stormy.
- An error message is given if an action fails, so the user is aware of what has worked and what has failed.

## Benefits of the software

### For the Air Traffic Controller

The software provides a simple to access, centralised, tracking system with safety checks, removing human error from decisions to allow planes to take-off and land. The air traffic controller simply inputs a request to land, and the software processes this if the airport is able to receive the plane. The controller no longer needs to keep a manual track of the planes, reducing their workload and allowing them to process more landing requests in less time. The software also helps shift handovers occur more smoothly, as an air traffic controller would no longer need any prior knowledge of the planes currently in an airport for them to start their shift; They can jump straight into handling landing and take-off requests.

### For the Company Managing the Airport

These time savings for the air traffic controller mean that more planes can be handled safely in the same amount of time, allowing more passengers to pass through the airport and increasing potential revenue. The emphasis on error checking is also a huge benefit to the airport, both from a safety perspective; stopping planes from landing in bad weather decreases the likelihood of accidents, but also from a customer satisfaction perspective. The vast majority of mistakes in allowing or not allowing planes to land or take-off simply cause delays and increases to journey times for passengers, which make them more likely to find alternative ways to travel in the future; By using this software to avoid mistakes and decrease the chance of delays, more customers are likely to return and use the airport again.

### For the Operators of Planes Landing in the Airport

Using this software to streamline the process of take-offs and landings at an airport makes it a more attractive option for aeroplane operators to fly to and from, increasing the likelihood that it is chosen over its nearby competitors and potentially increasing profitability through increased plane stand rents and passenger footfall.

## Risks

**Human error:** While this software does dramatically reduce the impact of human error on air traffic control work, it is still the responsibility of the controller to add and remove planes in line with the actual requests and events at the airport. If the information inputted does not match the real airport, then there is the possibility that incorrect requests may be handled and, in the worst cases, planes may be instructed to land at a full airport or during stormy weather.

**User authentication:** At the moment the software does not contain any method of user verification, which means that a user who was able to physically access the system may be able to make adjustments to the airport without permission.

## Further Development

Although the software is fully functional in its current state, there are some key developments that are being considered for the future:

**An improved interface:** A user-friendly interface which makes it easier for controllers to update the information about planes faster and more accurately.

**User authentication:** Sign in to confirm that the user changing information has permission to do so.

**Flight Scheduling:** Methodology to keep track of expected plane take-offs and landings to allow airport space to be planned in advance where possible.

## Conclusion

In conclusion, this software represents a massive potential for increased efficiency and ultimately profitability for the airport using it. Although there are some risks which it is unable to completely mitigate, the large amount of functionality and safety checks that it adds to the toolset of an air traffic controller makes the software an invaluable investment for any airport.

[1] https://www.heathrow.com/company/about-heathrow/facts-and-figures

# Domain Models and Test Plan

## Core Features:

### User stories:

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

## Additional features:

Generative AI was used in the development of the user following user stories and their domain models. Alongside their user stories, the AI also provided acceptance criteria which have been included below as they were deemed to be relevant and helpful to the task.

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
