/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const p = new Promise(function (resolve){
        let start = new Date().getTime();
        let now = start;
        while(now - start<milliseconds){
     
            now = new Date().getTime();}
        resolve();

    })
    return p;
}
sleep(5000).then(function(){
    console.log("I am done sleeping");
})
module.exports = sleep;
