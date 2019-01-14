var https = require('https');

function getHTML (options, callback) {
  callback();
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'syntantris.github.io',
  path: '/http-examples/step1.html'
};

getHTML(requestOptions, printHTML);

// considerations:
// - A function definition is when you define the function, give it parameters and tasks (like looping through an array, printing stuff, whatever). A function invocation is when you call that function to make it go.