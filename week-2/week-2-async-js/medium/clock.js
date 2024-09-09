// function displayTime() {
//     const now = new Date();

//     // Format HH:MM:SS
//     const time24 = now.toTimeString().split(' ')[0];

//     // Format HH:MM:SS AM/PM
//     let hours = now.getHours();
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     const time12 = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

//     console.clear();
//     console.log(`24-hour format: ${time24}`);
//     console.log(`12-hour format: ${time12}`);
// }

// setInterval(displayTime, 1000);

function displayTime() {
  const now = new Date();
  let time24 = now.toTimeString().split(" ")[0]; //toTimeString() method returns a string representing the time portion of a date object.
  // console.log(now.getTime()); This method returns the number of milliseconds since the Unix epoch.
  let hours = time24.split(":")[0];
  let minutes = time24.split(":")[1];
  let seconds = time24.split(":")[2];
  let ampm = hours>=12? "PM":"AM";
  hours = hours < 12 ? hours : hours % 12;
  if (hours == 0) {
    //     hours = hours % 12;
    //     hours = hours ? hours : 12;
    // the hour '0' should be '12'
    hours = 12;
  }
  
  let time12 = `${hours}:${minutes}:${seconds} ${ampm}`;
  console.clear();
  console.log(`24-hour format: ${time24}`);
  console.log(`12-hour format: ${time12}`);
}

setInterval(displayTime,1000);
