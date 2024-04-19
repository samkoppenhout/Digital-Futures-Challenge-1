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

console.log(`Test 1`);
console.log(`==================`);
console.log(
    `Input an integer and check that the capacity is that integer
`
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

// Clear Up
clearUp();