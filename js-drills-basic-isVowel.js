//Warmup - JS Drills - Basic Functions & Data Types

//------------------------------------------------------------------
// TASK 1:  isVowel()
// Write a function called isVowel() that returns true/false for 
//  whether a character is a vowel or not.
//------------------------------------------------------------------

//INPUT: 'string (single character)'
var isVowel = function(inputChar){
	// console.log("LOOK AT ME")
	if(
		  inputChar === 'a' ||
		  inputChar === 'A' ||
      inputChar === 'e' ||
      inputChar === 'E' ||
      inputChar.toLowerCase() === 'i' ||
      inputChar.toLowerCase() === 'o' ||
      inputChar.toLowerCase() === 'u' 
	){
		return true;
	} // else {
	// 	return false
	// }
	
	return false;
	//OUTPUT : boolean (true/false)	
}

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('E') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('I') === true);
console.assert(isVowel('y') === false);

