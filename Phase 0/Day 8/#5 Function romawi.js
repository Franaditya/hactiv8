function romawi(input) {
  var angka = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var roma = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var hasil='';
  
  for(var i=12; i >=0; i--) {
    while(input >= angka[i]) {
     input = input - angka[i];
     hasil = hasil + roma[i];
   }
 }

 console.log(hasil);
}


romawi(5);