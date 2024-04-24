const airport = {
    capacity: 10,
    planeList: [],
    setCapacity(newCapacity) {
        Number.isInteger(newCapacity) && (newCapacity >= 0) ? this.capacity = newCapacity : console.log(`WARNING: The new capacity must be a non-negative integer. Capacity has not been changed.`);
    },
    isFull() {
        return (this.planeList.length >= this.capacity)
    },
    searchForPlane(plane) {
        return this.planeList.includes(plane);
    },
    addPlane(plane) {
        !(plane === null) && !(this.isFull()) && !(this.searchForPlane(plane)) && airport.planeList.push(plane);
    },
    removePlane(plane) {
        this.planeList = this.planeList.filter((query) => !(query === plane));
    }
}

export default airport;