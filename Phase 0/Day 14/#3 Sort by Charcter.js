function sortByCharacter (text) {
  var strings = [];
  for(i = 0; i < text.length; i++){
		strings.push(text[i])
	}
	strings.sort();
	return strings.join("");
}

// TEST CASES
console.log(sortByCharacter('hello')); // 'ehllo'
console.log(sortByCharacter('truncate')); // 'acenrttu'
console.log(sortByCharacter('developer')); // 'deeeloprv'
console.log(sortByCharacter('software')); // 'aeforstw'
console.log(sortByCharacter('aegis')); // 'aegis'

