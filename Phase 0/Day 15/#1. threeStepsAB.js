function threeStepsAB(num) {
 
 for(var x =0; x<num.length;x++){
   if(num[x] == 'a' && num[x+4] =='b'){
     return true
   } else if(num[x] == 'b' && num[x+4] =='a'){
     return true
   }
 } return false 
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // true
console.log(threeStepsAB('bacon and meat')); // false