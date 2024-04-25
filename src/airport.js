const airport = {
    // Properties
    capacity: 10,

    planeList: [],

    isStormy: false,


    // Methods
    setCapacity(newCapacity) {
        // If the plane new capacity is less than the number of planes currently in the airport, is an integer and is above zero, the capacity is updated to the new capacity. Otherwise, an error message is printed.
        (newCapacity >= this.planeList.length) && Number.isInteger(newCapacity) && (newCapacity >= 0) ? this.capacity = newCapacity : console.log(`WARNING: Capacity has not been changed. The new capacity must be a non-negative integer, greater than or equal to the number of planes currently at the airport.`);
        },

    isFull() {
        // Returns true if the number of planes is greater than or equal to the current capacity.
        return (this.planeList.length >= this.capacity)
    },

    searchForPlane(plane) {
        // Checks to see if a given plane is in the airport.
        return this.planeList.includes(plane);
    },

    addPlane(plane) {
        // If the plane is not a null value, the airport is not full and the weather is not stormy, the new plane is added to the airport. Otherwise, an error message is printed.
        !(plane === null) && !(this.isFull()) && !(this.searchForPlane(plane)) && !this.isStormy ? airport.planeList.push(plane) : console.log(`WARNING: The plane was not added. The airport must not be full, the plane must not already be at the airport and the weather must not be stormy.`);
    },

    removePlane(plane) {
        // If the weather is not stormy and the plane is in currently in the airport, the plane is removed. Otherwise, an error is printed.
        !this.isStormy && this.searchForPlane(plane) ? (this.planeList = this.planeList.filter((query) => !(query === plane))) : console.log(`WARNING: The plane was not added. The airport must contain the plane already and the weather must not be stormy.`);
    }
}

export default airport;