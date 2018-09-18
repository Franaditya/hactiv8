var http = require('http');

http.createServer(function (req,res){
	if(req.url != '/favicon.ico'){
		console.log(req.url);
		res.writeHead(200,{'Content-Type' : 'text/plain'});
		res.write('Hello from Node js Server');
		res.write('\n You req : ' + req.url);
		res.end();
	}
}).listen(8888);

console.log('server is running .....');