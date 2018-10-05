/*
============================
 Menseleksi DOM Lebih Dalam
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);
Cara ini tentu paling mudah dibaca, namun seringkali kita membutuhkan cara yang lebih cepat dan praktis, yaitu menggunakan chaining selectors!