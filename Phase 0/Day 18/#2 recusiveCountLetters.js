function countLetters (word, letter) {
  if(word.length === 0){
		return 0;
	}
	var front = word[0];
	//console.log(front)
	var count = 0;
	if(front === letter){
		count = 1;
	}
	var back = word.slice(1);
	//console.log(back)
	return count + countLetters(back, letter);
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3

 

