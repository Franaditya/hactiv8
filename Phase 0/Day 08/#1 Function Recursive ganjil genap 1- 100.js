function angka (n) {
  if (n === 101 ){
   return ;
   }else if (n % 2) {
   	console.log(n + ' ganjil');
   }else {
   	console.log(n + ' genap');
   }
   angka (n+1);
}
angka (1);

