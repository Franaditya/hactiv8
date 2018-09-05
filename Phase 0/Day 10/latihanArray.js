var arrayPenumpang = [];
let tambahPenumpang = function (namaPenumpang, arrayPenumpang) {
	// Jika angkot kosong
	if (arrayPenumpang.length == 0) {
		//menambahkan penumpang diawal array
		arrayPenumpang.push(namaPenumpang);
		//kembalikan isi array dan keluar dari function
		return arrayPenumpang;
	}else{
		//telusuri seluruh kursi dari awal
		for ( var i = 0 ; i < arrayPenumpang.length; i++){
			//jika kursi kosong
			if (arrayPenumpang[i] == undefined && arrayPenumpang[i] != namaPenumpang){
				//tambah penumpang dikursi tersebut
				arrayPenumpang[i] = namaPenumpang;
				//kembalikan isi array dan keluar dari function
				return arrayPenumpang;

			//jika sudah ada nama yang sama
			}else if(arrayPenumpang[i] == namaPenumpang) {
				//tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada didalam angkot');
				//kembalikan isi array dan keluar dari function
				return arrayPenumpang;

			//jika seluruh kursi sudah penuh
			}else if (i == arrayPenumpang.length -1){
				//tambahkan penumpang di array terakhir
				arrayPenumpang.push(namaPenumpang);
				//kembalikan isi array dan keluar dari function
				return arrayPenumpang;
			}
		}
	}
}

let hapusPenumpang = function (namaPenumpang, arrayPenumpang) {
	if (arrayPenumpang.length == 0){
		console.log('Penumpang Masih Kosong . .');
		return arrayPenumpang;
	}else{
		for(var i = 0; i < arrayPenumpang.length; i++){
			if (arrayPenumpang[i] == namaPenumpang) {
				arrayPenumpang[i] = undefined;
				return arrayPenumpang;
			}else if (i == arrayPenumpang.length -1){
				console.log(namaPenumpang + ' Tidak ada didalam angkot . .');
				return arrayPenumpang;
			}
		}
		
	}
}