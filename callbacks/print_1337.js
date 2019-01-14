var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  console.log(html.replace(/[a]/g, "4").replace(/[e]/g, "3").replace(/[o]/g, "0").replace(/[l]/g, "1"));
}

getHTML(requestOptions, print1337);