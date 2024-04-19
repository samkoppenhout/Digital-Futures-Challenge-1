const airport = {
    capacity: undefined,
    setCapacity(newCapacity) {
        newCapacity >= 0 ? this.capacity = newCapacity: console.log(`WARNING: The new capacity cannot be a negative number`);
    }
}

export default airport;