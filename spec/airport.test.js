import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js"

let expected, actual, result, testCapacity;

const clearUp = () => {
    expected = undefined;
    actual = undefined;
    result = undefined;
    testCapacity = undefined;
}

//? TEST 1
//* Input an integer and check that the capacity is that integer

console.log(`==================`);
console.log(`Test 1:`);
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

//? TEST 2
//* Define the capacity previously, input a new integer and check that the capacity is now the new integer

console.log(`==================`);
console.log(`Test 2:`);
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

//? TEST 3
//* 

console.log(`==================`);
console.log(`Test 3`);
console.log(`==================`);
console.log(
    `Try to add a negative number and check that the capacity is not negative`
);

expected = true;
testCapacity = -10;

//Act
airport.setCapacity(testCapacity);
actual = (airport.capacity >= 0 ? true : false)

//Assert
result = assertEquals(expected, actual);

//Report
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================
`);

// Clear Up
clearUp();