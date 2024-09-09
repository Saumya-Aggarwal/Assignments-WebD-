let x = 0;
function clock(param) { 
    console.clear();
    console.log(x++);
    setTimeout(clock,1000)
 }
 clock();