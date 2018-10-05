// Pertama, kita seleksi terlebih dahulu <body>
var body = document.body;

// Kemudian, kita buat sebuah element HTML <div> menggunakan createElement
var mainDiv = document.createElement('div');

// Untuk membuat <div id="main">, maka kita harus membuat HTML attribute id
var mainDivAttrId = document.createAttribute('id');

// Untuk memberikan nilai kepada id, maka kita gunakan .value
mainDivAttrId.value = "main";

// id="main" kita sudah siap. Sekarang kita harus menambahkan attribute tersebut ke mainDiv
mainDiv.setAttributeNode(mainDivAttrId);

// mainDiv kita sudah menjadi <div id="main">. Saatnya kita tambahkan ke dalam <body>
// Karena Kita akan meletakkan <div id="main"> di dalam <body>, maka kita gunakan appendChild
body.appendChild(mainDiv);

// Selanjutnya, kita akan mengulangi hal yang serupa untuk menambahkan <div id="inside-main">
var insideMainDiv = document.createElement('div');

// Selain menggunakan .value kemudian setAttributeNode, kita bisa menggunakan shorthand berikut
insideMainDiv.setAttribute('id', 'inside-main');

// <div id="inside-main"> kita sudah siap, saatnya di append sebagai child ke <div id="main">
mainDiv.appendChild(insideMainDiv);
//Kita telah selesai membuat div di dalam div lain. Kita berhasil membuat secara dinamis element HTML dengan hubungan parent-child! Selanjutnya, kita akan membuat <h1> di dalam <div id="inside-main"> yang baru saja kita buat.