var modul1 = require('./modul1.js');

// tidak bisa dipanggil karena variable mash bersifat private
// variable harus diexport terlebih dahulu dalam file modul1.js
console.log(modul1.myName + ' ' + modul1.age);
//cara manggil function
modul1.print;


console.log(modul1.saya + ' ' +modul1.umur);
//cara manggil function yang didalam json
modul1.cetak();
