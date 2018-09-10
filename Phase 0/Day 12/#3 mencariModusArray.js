//var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ];
 let modus = 0;   //indeks array
 let terbanyak = 0;
 let jumlah = 0;

function cariModus(arr) {
  arr.sort(function(a, b) { return a > b });
  //console.log(arr);  
  
  for (let i = 0; i < arr.length; i++) {
    jumlah = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        jumlah++;

        if (jumlah > terbanyak) {
          terbanyak = jumlah;
          modus = i;
        }
      }
    }
  }

	if (terbanyak === 0 ) {
		return 'array kosong';
	} else if (terbanyak === arr.length - 1){
		return 'Semua Angka didalam Array SAMA, masukkan angka yang berbeda ..!';
	} else {
		return arr[modus];
	}

}
// pake array yang sudah diurutkan dengan sort
console.log(cariModus([ ])); 
console.log(cariModus([2,2,2])); 
console.log(cariModus([ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ])); 
