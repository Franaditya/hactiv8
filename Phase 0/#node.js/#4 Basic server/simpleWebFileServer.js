var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
	var kode = 0;
	var file = '';
	if(req.url == '/'){
		//index
		kode = 200;
		file = 'index.html';
	}else if (req.url == '/contact'){
		//contact
		kode = 200;
		file = 'contact.html';
	}else{
		//not found
		kode = 404;
		file = '404.html';
	}
	
	res.writeHead(kode,{'Content-Type' : 'text/html'});
	fs.createReadStream('./tempalate/'+file).pipe(res);
}).listen(8888);

console.log('server is running .....');