var express = require('express')
var app     = express()
var port    = 8080
var listen  = `Listening on http://localhost:${port}`

app.use(express.static('./public'))

app.get('/', function(req, res){
	res.send('index.html')
})

app.listen(8080, function(){
	console.log(listen)
})
