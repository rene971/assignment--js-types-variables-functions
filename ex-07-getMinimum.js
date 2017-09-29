/**
 * getMinimum()
 * ------------------------------------------------------
 * Write a function called `getMinimum()` that takes 4 numbers as arguments
 * and returns the one with the lowest value.
 *
 **/
function getMinimum (uno, dos, tres, cuatro ) {
  if  (uno < dos && uno<tres && uno<cuatro)
  {
    console.log(uno)
    return uno
  }
  if  (dos < uno && dos<tres && dos<cuatro){
  console.log(dos)
  return dos
  }
  if  (tres < uno && tres<dos && tres<cuatro){
    console.log(tres)
    return tres
  }
  if  (cuatro < uno && cuatro<dos && cuatro<tres){
    console.log(cuatro)
    return cuatro
  }
}

//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*



console.assert( getMinimum(1,2,4,0) === 0 )
// console.assert( getMinimum(4,8,4,20) === 4 )
console.assert( getMinimum(1000,-2,-99,50) === -99 )
console.assert( getMinimum(-1000,-2,-99,50) === -1000 )
console.assert( getMinimum(400,-11,4,-5) === -11 )
