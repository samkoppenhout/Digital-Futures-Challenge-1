const airport = {
    capacity: undefined,
    planeList: [],
    setCapacity(newCapacity) {
        Number.isInteger(newCapacity) && newCapacity >= 0 ? this.capacity = newCapacity : console.log(`WARNING: The new capacity must be a non-negative integer. Capacity has not been changed.`);
    },
    isFull() {
        return (this.planeList.length >= this.capacity)
    }
}

export default airport;