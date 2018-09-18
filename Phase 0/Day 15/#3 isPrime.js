function isPrime (num) {
 for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// TEST CASES
console.log(isPrime(3)); // true
console.log(isPrime(7)); // true
console.log(isPrime(6)); // false
console.log(isPrime(23)); // true
console.log(isPrime(33)); // false