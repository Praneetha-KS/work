const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
//define fun
const add=(a,b)=> console.log(`Addition: ${a} + ${b}= ${a+b} `);     
//sub
//mul
const div=(a,b) => {
    if(b===0)
        console.log('error');
    else{
        console.log(`Multiplication : ${a} / ${b} = ${a/b}`);
    }
};
//register events
eventEmitter.on('add',add);
eventEmitter.on('div',div);

//emit
eventEmitter.emit('add',20,10);
eventEmitter.emit('div',10,2);
eventEmitter.emit('div',19,0);

//remove
eventEmitter.off('add',add);
console.log('Add event listenere is removed');

eventEmitter.emit('add',1,2);
console.log("Executed");
