var express = require('express')
var fs = require('fs')
var app = express()
var config = JSON.parse(fs.readFileSync("config.json"))


app.get('/', function(req, res){
  res.send(config["greeting"] || "Hello World")
})

app.listen(config["port"])
console.log('Listening on port', config["port"])
