// node app should take only two arguments
// a url and a local file paths
const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2, 4);

request(args[0], (error, response, body) => {
  console.log('statusCode: ', response && response.statusCode);
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(error)
      return
    }
  })
})

console.log(args)