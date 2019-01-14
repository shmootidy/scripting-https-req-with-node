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