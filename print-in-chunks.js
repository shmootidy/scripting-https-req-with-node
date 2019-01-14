var https = require('https');

function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTMLChunks();

// considerations:
// - https request should be outside the function, although I suspect it doesn't matter in this case. In most cases, my guess is it does matter, so I want to get into the habit of putting it first. That way, the module is available as a global scope.
// - The stream function - data - will be the one that logs the data chunks as they come in. The others - 'error', 'end', and 'finish' - have different purposes.