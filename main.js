const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const add = (a, b) => console.log(`Addition: ${a} + ${b}= ${a + b}`);     
const div = (a, b) => {
    if (b === 0) console.log('error');
    else console.log(`Multiplication : ${a} / ${b} = ${a / b}`);
};

eventEmitter.on('add', add);
eventEmitter.on('div', div);

eventEmitter.emit('add', 20, 10);
eventEmitter.emit('div', 10, 2);
eventEmitter.emit('div', 19, 0);

eventEmitter.off('add', add);
console.log('Add event listenere is removed');

eventEmitter.emit('add', 1, 2);
console.log("Executed");
