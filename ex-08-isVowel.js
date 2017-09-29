/**
 * isVowel()
 * ------------------------------------------------------
 * Write a function called isVowel() that returns true/false for
 * whether a character is a vowel or not.
 *
 **/
function isVowel(a)
{
  if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u" || a === "A" || a === "E" || a === "I" || a === "O" || a === "U")
  {
    var vocal = a + " === " + "true "
    console.log(vocal)
    return true
    }
else {
  var  consonante = a + " === " + "false"
  console.log(consonante)
  return false
}
}





 //*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert(isVowel('x') === false);
console.assert(isVowel('e') === true);
console.assert(isVowel('o') === true);
console.assert(isVowel('n') === false);
console.assert(isVowel('L') === false);
console.assert(isVowel('A') === true);
console.assert(isVowel('O') === true);
// console.assert(isVowel('y') === true);
  //(of course, 'y' is a vowel!!)
