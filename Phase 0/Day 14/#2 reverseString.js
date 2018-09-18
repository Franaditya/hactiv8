function reverseString (str) {
   var balik = [];
  
  for (let i = str.length - 1; i >=0; i--) {
    balik.push(str[i]);
  }
 
  return balik.join('');

}
// TEST CASES
console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseString('John Doe')); // eoD nhoJ
console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseString('Super')); // repuS