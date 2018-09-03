var arr = [];
function angka (n1, n2) {
  var arandom = Math.floor(Math.random ()*100)+1;
  if (n1 ===  n2+1){
   return ;
   }else if (n1 % 2) {
   	arr.push(arandom);
   }else {
   	arr.push(arandom);
   }
   angka (n1+1, n2);
   arr.sort((a,b) => a > b ); 
}
angka(1, 10);
console.log(arr);
