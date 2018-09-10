function removeSpaces (str) {
   var hasil = str.replace(/\s+/g, ''); // \s untuk spasi  & /g untuk pencarian global   REGEX
  return hasil;
}


function reverseText (str) {
   var balik = [];
  
  for (let i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
  
  return balik;
}


function updateVowels (str) {
  var arr = [];
  var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  
  for (var i = 0; i < str.length; i++) {
    arr.push(abjad[abjad.indexOf(str[i])+1]);
  }
  return arr.join('');
    
  }
  

var password = 'dimitri w';
var noSpaces = removeSpaces(password);
var reversed = reverseText(noSpaces);
var encryptedPassword = updateVowels(reversed);
console.log(encryptedPassword);
