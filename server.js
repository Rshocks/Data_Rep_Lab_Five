const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Listening to http get request, when get request recieved sends back welcome message
// Save always then restart node server.js
app.get('/', (req, res) => {
  res.send('Welcome to Data Rep & Query!!');
})

app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name); //logs name to console when http://localhost:3000/hello/ronan
    res.send('Hello' + req.params.name); //sending back message 
})

//sending data from server to client
app.get('/api/movies', (req, res)=>{
    const mymovies = [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },

            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            }
        ];
        
    res.json({movies:mymovies}); //sending json data back
});

//sending file 
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

//notice how http changes 
app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' '+ req.query.lname)
})

//listen for post request
//sent up body, using body parser
app.post('/name', (req, res)=>{
    res.send('Hello' + req.body.fname + ' ' + req.body.lname)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})