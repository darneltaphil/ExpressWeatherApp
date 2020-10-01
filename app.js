const express = require('express');
const request = require('request');
//const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

//Static file declaration
//app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
// if(process.env.NODE_ENV === 'production') {  
//   app.use(express.static(path.join(__dirname, 'client/build')));
//  }  

//routing to the weather display
app.get('/:town', (req,res) => {
  const location = req.params.town;
  request('http://api.weatherstack.com/current?access_key=837e00581a14b54b44fcb5f46b8d591b&query='+location, 
  (err,req, body) => {
    if(!err && res.statusCode==200){ res.send(body)
    }
  })
});

app.get('*', (req,res) =>{
  res.sendStatus(404);
});

//start server
app.listen(port, (req, res) => {  console.log( `server listening on port: ${port}`);})

