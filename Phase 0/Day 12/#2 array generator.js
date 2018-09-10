var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
var baru = text.split(':');
var ok = baru.join();
var result = ok.split (',');

var hasil = [];
var x = 0;
	//dimensi
	for(var i=0; i<result.length / 3; i++){
		var arr = [];
	    //isi
	    for(var j=0; j<result.length / 3 ; j++){
	    	
	    	arr.push(result[x]);
	    	x++;
	    }
	    hasil.push(arr);
	}
	console.log(hasil);