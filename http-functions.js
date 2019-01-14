var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function(response){

    if(response.statusCode !== 200){
      console.log("Whoops!");
      return;
    }

    response.setEncoding('utf8');

    var receivedHTML = '';
    response.on('data', function(data){
      receivedHTML += data;
    });

    response.on('end', function(){
      callback(receivedHTML);
    });
  });
}



//considerations:
// - My immediate impulse is to have the require('https') variable within the http-function.js file. This allows it to be private (which is always nice; keep your hands off my stuff!) but...
// - the hint suggests we may have use for requiring httP (without the s). However, the options we are given are to put it at the top of the file (global and private) or within the function (local and not private). Functionally, I can't see much difference. Perhaps I could include another param in the getHTML function that allows for different types of requests (i.e., https or http or ft, whatever), that can be set by the file that actually calls the function. I think... Maybe...