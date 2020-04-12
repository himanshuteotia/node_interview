// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];  

// New timers, tasks , operations are recorded from myfile running
myFile.runContents();

function shouldContinue() {

    // Check one : Any pending setTimeout, setInterval, and setImmediate?  
    // Check two : Any pending OS tasks ? (Like server listening to port)
    // Check three : Any long running pending operations (Like FS modules) 
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;

}

// everytime an event loop runs we consider as one tick
// entire body executes in one 'tick'

while(shouldContinue()) {

    // 1) Node looks any pendingTimers and see any functions
    // are ready to be called. setTimeout, setInterval


    // 2) Node looks at any pendingOSTasks and pendingOperations
    // and calls relevant callbacks  

    // 3) Pause execution. Continue when ...
    //  - a new pendingOSTasks is done
    //  - a new pendingOperation is done
    //  - a timer is about to complete

    // 4) Look at pendingTimers only setImmediate
    
    // 5) Handle any close events
}





// exit back from terminal