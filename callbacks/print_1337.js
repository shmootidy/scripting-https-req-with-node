var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

var leetObj = {
  a: '4',
  e: '3',
  l: '1',
  s: '5',
  t: '7',
  'ck': 'x',
  'er': '0r',
  'you': 'j00'
};

function print1337 (html) {
  // html = html.replace(/a|e|l|s|t/gi|[ck]|[er]|[you]/gi, function(matched){
  //   return leetObj[matched];
  // });
  console.log(html.replace(/[a]/g, "4").replace(/[e]/g, "3").replace(/[o]/g, "0").replace(/[l]/g, "1"));
}

getHTML(requestOptions, print1337);