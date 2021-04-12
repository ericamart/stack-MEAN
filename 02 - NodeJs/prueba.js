function prueba() {

    console.log(1);
    let https = require('https');

    var options = {
        host: en.wikipedia.org,
        port: 80,
        path: '/w/api.php?action=parse&section=0&prop=text&format=json&page=pizza',
        method: 'GET'
      };
      
      http.request(options, function(res) {
    
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          console.log('BODY: ' + chunk);
        });
      }).end();
    
    
}


prueba();