const request = require('request');
const fs = require('fs');
const { rawListeners } = require('process');

const getArguements = function() {
  const arg = process.argv.slice(2);
  return arg;
}



const fletcher = function(nets) {
  request(nets[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(nets[1], body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  console.log(`Downloaded and saved ${body.length} bytes to ${nets[1]}`)
  })
}

const arg = getArguements();
const results = fletcher(arg);

console.log(results);