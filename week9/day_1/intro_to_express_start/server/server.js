const express = require ('express')
const app = express()
const cors = require('cors')

app.use(cors())

// requires 2 arg - get and method  (request + response)
app.get('/', function(req, res){
    res.json({message: "Sup World"})
})   

// argument listen to port and callback 
app.listen(9000, function(){
    console.log('App running on port 9000');
})