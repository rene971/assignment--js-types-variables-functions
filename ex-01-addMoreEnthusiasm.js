/**
 * (DEMO) addMoreEnthusiam()
 * ------------------------------------------------------
 * Write a function called withMoreEnthusiam that takes a string as
 * input and appends three exclamation marks to the end of the string.
 *
 **/


// DEMO
// -
// You, the student, will write the function
function addMoreEnthusiam(inputTxt){

	// ...and your code goes here
	var inputWithEnthusiasm = inputTxt + "!!!"
   return inputWithEnthusiasm
	 // Remember, you must return a value. Nice!
}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var output1 = addMoreEnthusiam("I want pizza")
console.assert( output1  === "I want pizza!!!" );

var output2 = addMoreEnthusiam("Hey")
console.assert( output2 === "Hey!!!");
