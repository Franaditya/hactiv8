var http = require('http');
var fs = require('fs');
var url = require ('url');

http.createServer(function (req,res){
	if(req.url != '/favicon.ico'){
		var access = url.parse(req.url);
		var file = '';
		console.log(access);
		if(access.pathname == '/') {
			file = './tempalate/index.html';
		}else if(access.pathname == '/contact') {
			file = './tempalate/contact.html';
		}else{
			file = './tempalate/404.html';
		}

		res.writeHead(200,{'Content-Type' : 'text/html'});
		fs.createReadStream(file).pipe(res);
		//res.write('Hello from Node js Server');
		//res.write('\n You req : ' + req.url);
		//res.end();
	}
}).listen(8888);

console.log('server is running .....');