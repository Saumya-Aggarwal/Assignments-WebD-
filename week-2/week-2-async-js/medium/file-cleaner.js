const fs = require("fs");
fs.readFile(
  "C:/Users/saumya Aggarwal/OneDrive/Desktop/Coding/Harkirat Course/ASSIGNMENTS/assignments/week-2/week-2-async-js/medium/fileCleaner.txt",
  "utf8",
  function (err, data) {
    if (err) throw err;
    const cleanedData = data
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .trim(); // Remove leading and trailing spaces

    fs.writeFile(
      "C:/Users/saumya Aggarwal/OneDrive/Desktop/Coding/Harkirat Course/ASSIGNMENTS/assignments/week-2/week-2-async-js/medium/fileCleaner.txt"
      , cleanedData, "utf-8", (err)=>{
        if (err) throw err;
        console.log("File cleaned successfully!");
      }
    );
  }
);
