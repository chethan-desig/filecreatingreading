var http=require('http');
var fs = require('fs')
 var server = http.createServer(function(req,res){
	 
	 fs.readFile('text.txt',function(err,data){
		 if(err)throw err
		res.write(data)
		res.end()
	 })
	
 })

 server.listen(6700)