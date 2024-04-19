import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"

// Define test variables
let expected, actual, result, testCapacity, plane1, plane2, plane3, testPlane;

//Clear Up Function
const clearUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    airport.capacity = undefined;
    testCapacity = undefined;
    plane1 = undefined;
    plane2 = undefined;
    plane3 = undefined;
    testPlane = undefined;
}

//? USER STORY 1
console.log(`==================`);
console.log(`USER STORY 1:`);
console.log(`==================
`);

//? TEST 1:1
//* Input an integer and check that the capacity is that integer

console.log(`==================`);
console.log(`Test 1:1`);
console.log(`==================`);
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

//? TEST 1:2
//* Define the capacity previously, input a new integer and check that the capacity is now the new integer

console.log(`==================`);
console.log(`Test 1:2`);
console.log(`==================`);
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

//? TEST 1:3
//* 

console.log(`==================`);
console.log(`Test 1:3`);
console.log(`==================`);
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

//? TEST 1:4
//* 

console.log(`==================`);
console.log(`Test 1:4`);
console.log(`==================`);
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

//? TEST 1:5
//* 

console.log(`==================`);
console.log(`Test 1:5`);
console.log(`==================`);
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

//? TEST 1:6
//* 

console.log(`==================`);
console.log(`Test 1:6`);
console.log(`==================`);
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



//? USER STORY 2
console.log(`==================`);
console.log(`USER STORY 2:`);
console.log(`==================
`);

//? TEST 2:1
//* Test that the airport reports not full when no planes have been added

console.log(`==================`);
console.log(`Test 2:1`);
console.log(`==================`);
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
console.log(`==================`);
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
console.log(`==================`);
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
console.log(`==================`);
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
console.log(`==================`);
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
console.log(`==================`);
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
console.log(`==================`);
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