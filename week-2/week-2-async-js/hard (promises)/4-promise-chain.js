/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    let p = new Promise(function(resolve){
        setTimeout(resolve, t*1000);

    });
    return p;
}

function wait2(t) {
    let p = new Promise(function(resolve){
        setTimeout(resolve, t*1000);

    });
    return p;
}

function wait3(t) {
    let p = new Promise(function(resolve){
        setTimeout(resolve, t*1000);

    });
    return p;
}


async function calculateTime(t1, t2, t3) {
 const start =  Date.now();
 await wait1(t1);
 await wait2(t2);
 await wait3(t3);
 const end =  Date.now();
 console.log(end - start);
const time = end - start; 
return time;   //here promise is resolving with a value 
 
}
calculateTime(1,2,3).then(function (time){
    console.log(time);
});
module.exports = calculateTime;
