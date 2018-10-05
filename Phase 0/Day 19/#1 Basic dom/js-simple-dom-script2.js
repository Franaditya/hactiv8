var pageTitleElement = document.getElementById("page-title");
console.log(pageTitleElement);
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
console.log(pageHeadings);
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
// isi <div id="page-title"> adalah Sample Page Title

var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
// isi <div class="page-box"> adalah undefined!
//isi <div class="page-box"> adalah undefined! Kenapa? pageBoxElements adalah array, dan saat kita melakukan innerHTML ke array, maka hasilnya adalah undefined!