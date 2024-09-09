const fs = require('fs');

// Read file and print its contents

fs.readFile('c:/Users/saumya Aggarwal/OneDrive/Desktop/Coding/Harkirat Course/ASSIGNMENTS/assignments/week-2/week-2-async-js/easy/counter.js', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
let x=0;
for (let index = 0; index < 999*8; index++) {
    x++;
    
}
console.log(x);