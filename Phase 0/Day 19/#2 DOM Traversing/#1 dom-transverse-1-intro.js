/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
====================================================
*/

// Menseleksi element <body>
var body = document.body;

// Mendapatkan element children dari <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
console.log(bodyChilds); // h1, div id="contoh-div-1", div id="contoh-div-2", scripts js
//Berdasarkan potongan kode di atas, kita berhasil mendapatkan children dari <body>, yaitu <h1>, <div id="contoh-div-1">, <div id="contoh-div-2"> dan <script>.