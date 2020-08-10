//rest parameter
//when number of arguments passed vary
const double = (...nums) => { //bundles all passed parameters into an array
	console.log(nums);
	return nums.map(num => num*2);
}

const result = double(1,3,5,6,7,3,8,9,6);
console.log(result);

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];
console.log(...people);

const members = ['mario', 'luigi', ...people];
console.log(...members);

//spread syntaxx (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'};

const personClone = person; // this doesnt create a new object, only makes new pointer pointing to the onject

const personClone2 = {...person}; //makes new copy of object

const personClone3 = {...person, location: 'delhi'};


/////////////////////////////////////////////////////////////////////////////


//sets - allows unique values, also have their own set of methods and properties

const namesArray = ['ryu', 'luigi', 'shaun', 'ryu'];
//duplicate values in array allowed

// const namesSet = new Set(namesArray); 
// //does exactly the same thing as
const namesSet = new Set(['ryu', 'luigi', 'shaun', 'ryu']);
console.log(namesSet); //deleted the duplicate value

const uniqueNames = [...namesSet];
//or
// const uniqueNames = [new Set(...namesArray)];

const ages = new Set();
ages.add(20);
ages.add(25).add(30);

ages.delete(25);
ages.size();

console.log(ages.has(30)); //returns true

ages.clear(); //removes all values

//can use forEach on sets


/////////////////////////////////////////////////////////////////////////////

//symbols -  no two symbols are ever the same

const symbolOne = Symbol();
const symbolTwo = Symbol();

console.log(symbolOne);
console.log(typeof symbolOne);

console.log(symbolTwo);
console.log(typeof symbolTwo);

console.log(symbolOne == symbolTwo); // returns false

const symbolOne = Symbol('an identifier'); //pass identifier to describe symbols
const symbolTwo = Symbol('an identifier');

console.log(symbolOne);
console.log(typeof symbolOne);

console.log(symbolTwo);  //both look exactly identical, but are not same
console.log(typeof symbolTwo);

console.log(symbolOne == symbolTwo); // still returns false

//symbols can be used as keys or property names in objects


const ninja= {};

ninja.age = 30; 
ninja['belt'] = 'orange';
ninja['belt'] = 'black'; //overwrites the property

console.log(ninja);

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun'; 
// adds 2 properties - will look identical, but are not