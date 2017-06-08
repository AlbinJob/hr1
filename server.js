// your server will live here

// import the 3rd party connect module and
// assign it as a reference to the connect variable
let express = require('express');

// create an instance of the connect server - app
//let app = connect();
let app = express();

// create the port constant
const localport = 3000;

let port=process.env.PORT || localport;
app.set('port',port);

// start listening on the port
/*app.listen(port);
console.log(`Server started at http://localhost:${port}`);*/

app.listen(port);
console.log(`Server started at http://localhost:${port}`);

// ROUTING

// second route is '/hello'
app.use('/hello', (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello, World!");

  next();
});

// first route is '/' - root of my website
app.use('/', (req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end("This is fortek API sample Run");

  //next();
});

module.exports=app;


