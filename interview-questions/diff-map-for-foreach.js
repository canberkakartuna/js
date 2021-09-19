/**
 * 1. Difference between map and forEach?
 */

const myAwesomeArray = [5, 4, 3, 2, 1]

console.log(myAwesomeArray.map(x => x * x)); // returns => [25, 16, 9, 4, 1], thus it is chainable. e.g. reduce, sort, filter
console.log(myAwesomeArray.forEach(x => x * x)); // returns => undefined, thus it is unchainable


let array = [];
for (var i = 0; i < 20000000; i++) {
  array.push(i)
}

console.time('map');
array.map(num => {
  return num * 4;
});
console.timeEnd('map'); // 490ms


console.time('forEach');
array.forEach((num, index) => {
  return array[index] = num * 4;
});
console.timeEnd('forEach'); // 358ms

console.time('for');
for (i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;

}
console.timeEnd('for'); // 39ms


/**
 * As always, the choice between map() and forEach() will depend on your use case.
 * If you plan to change, alternate, or use the data, you should pick map(), because it returns a new array with the transformed data.
 * But, if you won't need the returned array, don't use map() - instead use forEach() or even a for loop.
 */