// Fetcher app runs 2 operations (i) Make URL request and wait for response (ii) Take data received in (i) and writing in local path
// fetch HTTP
// Use Get to get file size
// convert size to bytes
// use fs.writeFile to write ./index.html (aka arg[1])





const request = require('request');
const fs = require('fs');
let arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('size;', body.length)

  fs.writeFile(arg[1], body, err => {
    if (err) {
      console.error(err);
    }
  });

  console.log(`Downloaded and saved ${body.length} bytes to ${arg[1]}`)

});



