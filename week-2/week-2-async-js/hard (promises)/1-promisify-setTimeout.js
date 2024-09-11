/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise(function (resolve){
        setTimeout(resolve, n * 1000); // wait n seconds before resolving the promise
        
    });
    return p;
}
wait(5).then(function () {console.log("5sec passed")});
console.log("end");
module.exports = wait;
