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
    })
  })
};