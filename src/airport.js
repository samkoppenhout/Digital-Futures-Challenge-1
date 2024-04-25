const airport = {
    // Properties
    capacity: 10,

    planeList: [],

    isStormy: false,


    // Methods
    setCapacity(newCapacity) {
        (newCapacity >= this.planeList.length) && Number.isInteger(newCapacity) && (newCapacity >= 0) ? this.capacity = newCapacity : console.log(`WARNING: Capacity has not been changed. The new capacity must be a non-negative integer, greater than or equal to the number of planes currently at the airport.`);
        },

    isFull() {
        return (this.planeList.length >= this.capacity)
    },

    searchForPlane(plane) {
        return this.planeList.includes(plane);
    },

    addPlane(plane) {
        !(plane === null) && !(this.isFull()) && !(this.searchForPlane(plane)) && !this.isStormy ? airport.planeList.push(plane) : console.log(`WARNING: The plane was not added. The airport must not be full, the plane must not already be at the airport and the weather must not be stormy.`);
    },

    removePlane(plane) {
        !this.isStormy && this.planeList.includes(plane) ? (this.planeList = this.planeList.filter((query) => !(query === plane))) : console.log(`WARNING: The plane was not added. The airport must contain the plane already and the weather must not be stormy.`);
    }
}

export default airport;