let unik3 = arr => arr.map((item, index, source) => 
  source.filter((item2, index2, source2) => index !== index2).reduce((acc, cur) => acc * cur));


console.log(unik3([2, 4, 6])); // [24, 12, 8]
console.log(unik3([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(unik3([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(unik3([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(unik3([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
