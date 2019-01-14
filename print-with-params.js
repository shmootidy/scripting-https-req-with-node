var https = require('https');

function getAndPrintHTML (options) {
  // body...
}

var requestOptions = {
  host: "sytantris.github.io",
  path: '/http-examples/step3.html'
};

//considerations:
// - the requestOptions variable is a global scope so that it can be passed through the get request when the function is called. If it were local, I couldn't specify. But globally, I can have many different request option variables and call the function using them to access the relevant data.
