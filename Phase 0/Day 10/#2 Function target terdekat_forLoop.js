// nilai o harus selalu ada di array (Parameter Function) , nilai x boleh tidak ada
function targetTerdekat (array){
var inO 	= [];	 // array indeks o sementara
var inX 	= []; 	 // array indeks x sementara
var selisih	= []; 	 // array selisih
var indeksO;	  	 // posisi indeks o
var jarak = 0;
var jarakTerdekat = array.length;

	// mencari indeks o
	for(var i = 0; i < array.length; i++) {
		if (array[i] === "o") {
			inO.push(i);
			indeksO = inO[0];
		}
	}
	// mencari indeks x dan jarak terdekat dari o dan x
	for(var j = 0; j < array.length; j++) {
		if (array[j] === "x") {
			inX.push(j);
			jarak = Math.abs(j - indeksO);
			selisih.push(jarak);
			jarakTerdekat = selisih[0];
		}else if (array[j] !== 'x' && array[j] !== 'o'){
			jarakTerdekat = jarak;
		}

	}
	//console.log(inX);
	//console.log(selisih);
	//console.log('indeks o = ' +indeksO);
	return jarakTerdekat;
}
console.log(targetTerdekat(['', '', 'o', '', 'x', 'x', 'x'])); //3
// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
