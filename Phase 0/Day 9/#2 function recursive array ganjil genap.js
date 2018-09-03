var arr = [];
function angka (n1, n2) {
  if (n1 ===  n2+1){
   return ;
   }else if (n1 % 2) {
   	arr.push(n1 + ' ganjil');
   }else {
   	arr.push(n1 + ' genap');
   }
   angka (n1+1, n2);
   
}
angka(3, 7);
console.log(arr);

