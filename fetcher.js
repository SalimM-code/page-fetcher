// first intialize npm and install the request package
const request = require('request');
const fs = require('fs');
// grab our comman args
const args = process.argv.slice(2);
// the variable holding our domain
let urL = args[0];
// variable for the localFile
let file = args[1]
// const sizeBytes = stats.size;

// we need to send a request to the domain
request(urL, (error , response, body) => {
  console.log('error:', error);
  console.log('status:', response && response.statusCode);
  console.log('body:', body) 
  // start write file
  fs.writeFile(file, body, (err, stats) => {
    if(err) {
      console.error(err)
      return
    }
  
    console.log(`Downloaded and saved to ${file}`);
  })

})
