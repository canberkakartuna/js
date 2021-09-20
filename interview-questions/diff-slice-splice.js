/**
 * Slice	                                        Splice
 * Doesn't modify the original array(immutable)	  Modifies the original array(mutable)
 * Returns the subset of original array	          Returns the deleted elements as array
 * Used to pick the elements from array	          Used to insert or delete elements to/from array
 */


var splicedArray = [1,2,3,4];
var slicedArray = [1,2,3,4];

splicedArray.splice(0,2);
slicedArray.slice(0,2);

console.log(splicedArray);
console.log(slicedArray);