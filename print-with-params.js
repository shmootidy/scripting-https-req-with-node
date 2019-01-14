var https = require('https');

function getAndPrintHTML (options) {
  https.get(options, )
}

var requestOptions = {
  host: "sytantris.github.io",
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

//considerations:
// - passing the URL as a string will work, but splitting it into options gives us more modualarity (for example, changing the port...right?). As an object, it's easier to see and adjust the various elements of the options. As a URL, we have fewer options and they are harder to change (and easier to mess up).
// - the requestOptions variable is a global scope so that it can be passed through the get request when the function is called. If it were local, I couldn't specify. But globally, I can have many different request option variables and call the function using them to access the relevant data. The options are now passed as a parameter. The function (and function handlers) need to use "options" (the param name) instead of the variable name.
