function gcd (num1, num2) {
var hasil = num1 % num2;
  if ( hasil === 0)
    return num2;
  else
    return gcd (num2, hasil); 
}
// TEST CASES
console.log(gcd(12, 16)); // 4
console.log(gcd(50, 40)); // 10
console.log(gcd(22, 99)); // 11
console.log(gcd(24, 36)); // 12
console.log(gcd(17, 23)); // 1