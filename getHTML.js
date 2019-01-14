var https = require('https');

function getHTML (options, callback) {
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
    })
  })
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

// considerations:
// - A function definition is when you define the function, give it parameters and tasks (like looping through an array, printing stuff, whatever). A function invocation is when you call that function to make it go.
// - yes, I understand these parameters and functions. The variable https accessing node's module. The var requestOptions holds the information https needs to GET the data from the right place. The function getHTML concats the response data into a string of HTML text. It also sets the text encoding and checks for errors in the retrieval. And then it calls the next function, printHTML, which prints the concatted string to my console.