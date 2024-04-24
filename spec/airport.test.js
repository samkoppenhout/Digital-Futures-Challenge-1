import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"

// Define test variables
let expected, actual, result, testCapacity, plane1, plane2, plane3, testPlane;

//Clear Up Function
const clearUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testCapacity = undefined;
    airport.capacity = 10;
    airport.planeList = [];
    airport.isStormy = false;
    plane1 = {};
    plane2 = {};
    plane3 = {};
    testPlane = {};
}

//Initialise any variables needed later using our clearUp function
clearUp();

//? USER STORY 1
console.log(`==================`);
console.log(`USER STORY 1:`);
console.log(`==================
`);

//? TEST 1:1
//* Test that the capacity initialises to 10

console.log(`==================`);
console.log(`Test 1:1`);
console.log(`------------------`);
console.log(
    `Test that the capacity initialises to 10`
);

//Arrange
expected = 10;

//Act
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:2
//* Input an integer and check that the capacity is that integer

console.log(`==================`);
console.log(`Test 1:2`);
console.log(`------------------`);
console.log(
    `Input an integer and check that the capacity is that integer`
);

//Arrange
expected = 10;
testCapacity = 10;

//Act
airport.setCapacity(testCapacity);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:3
//* Define the capacity previously, input a new integer and check that the capacity is now the new integer

console.log(`==================`);
console.log(`Test 1:3`);
console.log(`------------------`);
console.log(
    `Define the capacity previously, input a new integer and check that the capacity is now the new integer`
);

//Arrange
expected = 10;
testCapacity = 10;
airport.capacity = 0;

//Act
airport.setCapacity(testCapacity);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:4
//* 

console.log(`==================`);
console.log(`Test 1:4`);
console.log(`------------------`);
console.log(
    `Try to add a negative number and check that the capacity is not negative`
);

//Arrange
airport.capacity = 0;
expected = true;
testCapacity = -10;

//Act
airport.setCapacity(testCapacity);
actual = (airport.capacity >= 0)

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:5
//* 

console.log(`==================`);
console.log(`Test 1:5`);
console.log(`------------------`);
console.log(
    `Try to add a fractional number and check that the capacity is not fractional`
);

//Arrange
airport.capacity = 0;
expected = true;
testCapacity = 2.5;

//Act
airport.setCapacity(testCapacity);
actual = (Number.isInteger(airport.capacity) ? true : false)

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:6
//* 

console.log(`==================`);
console.log(`Test 1:6`);
console.log(`------------------`);
console.log(
    `Try to add a null value and check that the capacity is not null`
);

//Arrange
airport.capacity = 0;
expected = true;
testCapacity = null;

//Act
airport.setCapacity(testCapacity);
actual = (Number.isInteger(airport.capacity) ? true : false)

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:7
//* 

console.log(`==================`);
console.log(`Test 1:7`);
console.log(`------------------`);
console.log(
    `Try to add a string and check that the capacity is not a string`
);

//Arrange
airport.capacity = 0;
expected = true;
testCapacity = "test";

//Act
airport.setCapacity(testCapacity);
actual = (Number.isInteger(airport.capacity) ? true : false)

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:8
//* Test that the capacity can't be set below the number of planes currently at the airport

console.log(`==================`);
console.log(`Test 1:8`);
console.log(`------------------`);
console.log(
    `Test that the capacity can't be set below the number of planes currently at the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3];
expected = 10;

//Act
airport.setCapacity(2);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 1:9
//* Test that the capacity can be set to the number of planes currently at the airport

console.log(`==================`);
console.log(`Test 1:9`);
console.log(`------------------`);
console.log(
    `Test that the capacity can be set to the number of planes currently at the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3];
expected = 3;

//Act
airport.setCapacity(3);
actual = airport.capacity;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 2
console.log(`==================`);
console.log(`USER STORY 2:`);
console.log(`==================
`);

//? TEST 2:1
//* Test that the airport reports not full when no planes have been added

console.log(`==================`);
console.log(`Test 2:1`);
console.log(`------------------`);
console.log(
    `Test that the airport reports not full when no planes have been added`
);

//Arrange
expected = false;
airport.capacity = 10;

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 2:2
//* Test that the airport reports not full when the number of planes is between 0 and the given capacity

console.log(`==================`);
console.log(`Test 2:2`);
console.log(`------------------`);
console.log(
    `Test that the airport reports not full when the number of planes is between 0 and the given capacity`
);

//Arrange
expected = false;
airport.capacity = 10;
airport.planeList = [plane1,plane2,plane3]

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 2:3
//* Test that the airport reports full when there more planes than the given capacity

console.log(`==================`);
console.log(`Test 2:3`);
console.log(`------------------`);
console.log(
    `Test that the airport reports full when there more planes than the given capacity`
);

//Arrange
expected = true;
airport.capacity = 2;
airport.planeList = [plane1,plane2,plane3]

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 2:4
//* Test that the airport reports full when there is the same number of planes as the given capacity

console.log(`==================`);
console.log(`Test 2:4`);
console.log(`------------------`);
console.log(
    `Test that the airport reports full when there is the same number of planes as the given capacity`
);

//Arrange
expected = true;
airport.capacity = 3;
airport.planeList = [plane1,plane2,plane3]

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 2:5
//* Test that the airport reports full when the capacity is 0 and the list of planes is not empty

console.log(`==================`);
console.log(`Test 2:5`);
console.log(`------------------`);
console.log(
    `Test that the airport reports full when the capacity is 0 and the list of planes is not empty`
);

//Arrange
expected = true;
airport.capacity = 0;
airport.planeList = [plane1,plane2,plane3]

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 2:6
//* Test that the airport reports full when the capacity and number of planes is 0 and the list of planes is empty

console.log(`==================`);
console.log(`Test 2:6`);
console.log(`------------------`);
console.log(
    `Test that the airport reports full when the capacity and number of planes is 0 and the list of planes is empty`
);

//Arrange
expected = true;
airport.capacity = 0;

//Act
actual = airport.isFull();

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 3
console.log(`==================`);
console.log(`USER STORY 3:`);
console.log(`==================
`);

//? TEST 3:1
//* Test that the function returns false if the plane list is empty

console.log(`==================`);
console.log(`Test 3:1`);
console.log(`------------------`);
console.log(
    `Test that the function returns false if the plane list is empty`
);

//Arrange
expected = false;
airport.planeList = [];

//Act
actual = airport.searchForPlane(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 3:2
//* Test that the function returns false if the plane list is not empty but does not contain the given plane

console.log(`==================`);
console.log(`Test 3:2`);
console.log(`------------------`);
console.log(
    `Test that the function returns false if the plane list is not empty but does not contain the given plane`
);

//Arrange
expected = false;
airport.planeList = [plane1,plane2,plane3];

//Act
actual = airport.searchForPlane(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 3:3
//* Test that the function returns true if the plane is in the list of planes

console.log(`==================`);
console.log(`Test 3:3`);
console.log(`------------------`);
console.log(
    `Test that the function returns true if the plane is in the list of planes`
);

//Arrange
expected = true;
airport.planeList = [plane1,plane2,plane3,testPlane];

//Act
actual = airport.searchForPlane(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 4
console.log(`==================`);
console.log(`USER STORY 4:`);
console.log(`==================
`);

//? TEST 4:1
//* Test that the number of planes has increased by one

console.log(`==================`);
console.log(`Test 4:1`);
console.log(`------------------`);
console.log(
    `Test that the number of planes has increased by one`
);

//Arrange
airport.planeList = [];
expected = airport.planeList.length + 1;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:2
//* Test that the new plane is in the list

console.log(`==================`);
console.log(`Test 4:2`);
console.log(`------------------`);
console.log(
    `Test that the new plane is in the list`
);

//Arrange
expected = true;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:3
//* Test that you can add a plane when there are already planes at the airport

console.log(`==================`);
console.log(`Test 4:3`);
console.log(`------------------`);
console.log(
    `Test that you can add a plane when there are already planes at the airport`
);

//Arrange
expected = true;
airport.planeList = [plane1, plane2, plane3];

//Act
airport.addPlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:4
//* Test that a null variable can't be added to the airport

console.log(`==================`);
console.log(`Test 4:4`);
console.log(`------------------`);
console.log(
    `Test that a null variable can't be added to the airport`
);

//Arrange
expected = false;
testPlane = null;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:5
//* Test that planes aren't added when the airport is full

console.log(`==================`);
console.log(`Test 4:5`);
console.log(`------------------`);
console.log(
    `Test that planes aren't added when the airport is full`
);

//Arrange
expected = false;
airport.capacity = 3;
airport.planeList = [plane1, plane2, plane3];

//Act
airport.addPlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:6
//* Test that planes aren't added when the airport is over capacity

console.log(`==================`);
console.log(`Test 4:6`);
console.log(`------------------`);
console.log(
    `Test that planes aren't added when the airport is over capacity`
);

//Arrange
expected = false;
airport.capacity = 1;
airport.planeList = [plane1, plane2, plane3];

//Act
airport.addPlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 4:7
//* Test that planes aren't added when they're already in the airport

console.log(`==================`);
console.log(`Test 4:7`);
console.log(`------------------`);
console.log(
    `Test that planes aren't added when they're already in the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3, testPlane];
expected = airport.planeList.length;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 5
console.log(`==================`);
console.log(`USER STORY 5:`);
console.log(`==================
`);

//? TEST 5:1
//* Test that the number of planes has decreased by one

console.log(`==================`);
console.log(`Test 5:1`);
console.log(`------------------`);
console.log(
    `Test that the number of planes has decreased by one`
);

//Arrange
airport.planeList = [testPlane];
expected = airport.planeList.length - 1;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 5:2
//* Test that the given plane is not in the list

console.log(`==================`);
console.log(`Test 5:2`);
console.log(`------------------`);
console.log(
    `Test that the given plane is not in the list`
);

//Arrange
expected = false;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 5:3
//* Test that you can remove a plane when there are other planes at the airport

console.log(`==================`);
console.log(`Test 5:3`);
console.log(`------------------`);
console.log(
    `Test that you can remove a plane when there are other planes at the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3, testPlane];
expected = false;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.includes(testPlane);

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 5:4
//* Test that you can't remove planes which aren't in the airport

console.log(`==================`);
console.log(`Test 5:4`);
console.log(`------------------`);
console.log(
    `Test that you can't remove planes which aren't in the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3];
expected = airport.planeList.length;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 5:5
//* Test that a null variable can't be removed from the airport

console.log(`==================`);
console.log(`Test 5:5`);
console.log(`------------------`);
console.log(
    `Test that a null variable can't be removed from the airport`
);

//Arrange
airport.planeList = [plane1, plane2, plane3];
testPlane = null;
expected = airport.planeList.length;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 6
console.log(`==================`);
console.log(`USER STORY 6:`);
console.log(`==================
`);

//? TEST 6:1
//* Test that the weather is intialised to not stormy


console.log(`==================`);
console.log(`Test 6:1`);
console.log(`------------------`);
console.log(
    `Test that the weather is intialised to not stormy`
);

//Arrange
expected = false;

//Act
actual = airport.isStormy;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 6:2
//* Try to add the plane while isStormy is true and check that it is not

console.log(`==================`);
console.log(`Test 6:2`);
console.log(`------------------`);
console.log(
    `Try to add the plane while isStormy is true and check that it is not`
);

//Arrange
airport.isStormy = true;
expected = airport.planeList.length;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 6:3
//* Try to add the plane while isStormy is false and check that it is

console.log(`==================`);
console.log(`Test 6:3`);
console.log(`------------------`);
console.log(
    `Try to add the plane while isStormy is false and check that it is`
);

//Arrange
airport.isStormy = false;
expected = airport.planeList.length + 1;

//Act
airport.addPlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();



//? USER STORY 7
console.log(`==================`);
console.log(`USER STORY 7:`);
console.log(`==================
`);

//? TEST 7:1
//* Try to remove the plane while isStormy is true and check that it is not

console.log(`==================`);
console.log(`Test 7:1`);
console.log(`------------------`);
console.log(
    `Try to remove the plane while isStormy is true and check that it is not`
);

//Arrange
airport.planeList = [plane1, plane2, plane3, testPlane];
airport.isStormy = true;
expected = airport.planeList.length;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();

//? TEST 7:2
//* Try to remove the plane while isStormy is false and check that it is

console.log(`==================`);
console.log(`Test 7:2`);
console.log(`------------------`);
console.log(
    `Try to remove the plane while isStormy is false and check that it is`
);

//Arrange
airport.planeList = [plane1, plane2, plane3, testPlane];
airport.isStormy = false;
expected = airport.planeList.length - 1;

//Act
airport.removePlane(testPlane);
actual = airport.planeList.length;

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();