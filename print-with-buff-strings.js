var https = require('https');

function getAndPrintHTML () {
 var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response){
    response.setEncoding('utf8');

    var dataReceived = '';
    response.on('data', function (data) {
      dataReceived += data;
    });

    response.on('end', function(){
      console.log(dataReceived);
      console.log("The end.");
    })
  });
}

getAndPrintHTML();
// considerations:
// The best output for this is probably a big ol' string. So, that's what I'm going to set as the output data.