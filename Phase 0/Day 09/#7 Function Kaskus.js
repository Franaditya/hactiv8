var arr =[];
function kaskus (angka){
	for(var i = 0; i < angka.length; i++) {
		if(angka[i] % 15 == 0) {
			arr.push('KASKUS');
		}else if (angka[i] % 6 == 0) {
			arr.push('KUS');
		}else if (angka[i] % 3 == 0) {
			arr.push('KAS');
		}else{
			arr.push(angka[i]);
		}
	}
	return angka;
}
kaskus([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
console.log(arr);

