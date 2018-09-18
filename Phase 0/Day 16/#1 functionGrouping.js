function grouping (angka){
var arr =[];
var b =[];
	for(var i = 0; i < angka.length; i++) {
		if(angka[i] > 75  ) {
          arr.push(angka[i]);
        }else{
          b.push(angka[i]);
        }  
  
}
var hasil ={ 
  fail : arr,
  pass : b
}; 
  return hasil;

}
console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
console.log(grouping([]));
