function looping (angka,pangkat){
	var hasil = 1;
	for(var deret =1 ; deret <= pangkat; deret++){
 	hasil *= angka;
 }
 console.log(hasil);
}
looping (10 , 3);