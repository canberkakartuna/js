// Destructuring

/*
* Example on simple array
*/
const arr = [1, 2, 3];

const [x, y, z] = arr;

console.log(x, y, z);


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Italy',
  categories: [
    'Italian',
    'Pizzeria',
    'Vegan',
    'Organic'
  ],
  starterMenu: [
    'Focaccia',
    'Bruschetta',
    'Garlic Bread',
    'Caprese Salad'
  ],
  mainMenu: [
    'Pizza',
    'Pasta',
    'Risotto'
  ],
  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    monday: {
      open: 12,
      close: 22
    },
    friday: {
      open: 10,
      close: 23
    },
    sunday: {
      open: 11,
      close: 23
    }
  }
}

const [first, second] = restaurant['categories'];
console.log(first, second);


// reversing elements
// let [main, ,secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// short way
let [main, ,secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// destructuring objects
// const {location, openingHours, ...rest} = restaurant;
// const {monday, ...r} = openingHours

// console.log(location);
// console.log(openingHours);
// console.log(monday);

const {openingHours: {monday, ...restHours}, ...rest} = restaurant;

console.log(monday);
console.log(rest);