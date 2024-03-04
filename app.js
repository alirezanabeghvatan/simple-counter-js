// Import SimpleCounter
const SimpleCounter = require('simple-counter-js');

// Initialize a counter with an initial value of 10 and limit range from 0 to 100
const counter = new SimpleCounter({
    initialValue: 10,
    minValue: 0,
    maxValue: 100
});

// Increment the counter
counter.increment();

// Decrement the counter
counter.decrement();

// Get the current counter value
const value = counter.getValue();

// Reset the counter to its initial value
counter.reset();

// Add event hooks
counter.on('change', (newValue) => {
    console.log(`Counter value changed to: ${newValue}`);
});

counter.on('thresholdReached', (threshold) => {
    console.log(`Counter reached threshold: ${threshold}`);
});

// Persist counter value
counter.persist();
