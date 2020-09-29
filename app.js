const express = require('express');
const request = require('request');
const path = require('path');

const app = express();

// Root render
app.get('/', (req,res) => {
        res.send('nothing is here')
});

//app.set('views', path.join(__dirname, 'build'));

//routing to the weather display
app.get('/getweather/:town', (req,res) => {
  const location = req.params.town;
  request('http://api.weatherstack.com/current?access_key=837e00581a14b54b44fcb5f46b8d591b&query='+location, 
  (err,req, body) => {
    if(!err && res.statusCode==200){ res.send(body)
    }
  })
});

// An api endpoint that returns the login page
app.get('/login', (req,res) => {
   console.log('I am going to work on that soon');
});

app.get('*', (req,res) =>{
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);