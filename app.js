const express = require('express');
const request = require('request');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

// Root render
// app.get('/', (req,res) => {
//         res.send('nothing is here')
// });

//Static file declaration
app.use(express.static(path.join(__dirname, 'react-weather-app/build')));

//production mode
 if(process.env.NODE_ENV === 'production') {  
   app.use(express.static(path.join(__dirname, 'react-weather-app/build')));
  }
 
  //app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = 'react-weather-app/build/index.html'));})


//build mode
 //app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/react-weather-app/public/index.html'));});


//routing to the weather display
app.get('/getWeather/:town', (req,res) => {
  const location = req.params.town;
  request('http://api.weatherstack.com/current?access_key=837e00581a14b54b44fcb5f46b8d591b&query='+location, 
  (err,req, body) => {
    if(!err && res.statusCode==200){ res.send(body)
    }
  })
});

// An api endpoint that returns the login page
// app.get('/login', (req,res) => {
//    console.log('I am going to work on that soon');
// });

// app.get('*', (req,res) =>{
//   res.sendStatus(404);
// });


// app.listen(port);
//start server
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})
//console.log('App is listening on port ' + port);
