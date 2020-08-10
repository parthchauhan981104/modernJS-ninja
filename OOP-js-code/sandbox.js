class User {
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {  //if no constructor of its own - uses parent's constructor
  constructor(username, email, title){
    super(username, email); //must do this - run parent constructor and set up properties for this object as well.
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u => u.username !== user.username);
    return this; // allow method chaining
  }
}

const userOne = new User('luigi', 'luigi@thenetninja.co.uk');
const userTwo = new User('mario', 'mario@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt ninja');

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

console.log(userOne, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

//method chaining - needs functions to return the object instance - this.
//wouldnt work if they dont return anything or 'this', as default return 
//value is undefined, cant chain method to undefined.
userOne.login()
  .incScore()
  .incScore()
  .logout();


/////////////////////////////////////////////////////////////////////////////////


// //make objects without using class keyword(which came with ES6)
// //first letter capital distinguishes it as a constructor function (convention)
// function User(username, email){ 
//   this.username = username;
//   this.email = email;
//   this.login = function(){
//     console.log(`${this.username} has logged in`);
//   };
// }

// const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
// const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
// //new keyword acts exactly the same
// console.log(userOne, userTwo);
// userOne.login();

/////////////////////////////////////////////////////////////////////////////

//Prototype model
//defining functions inside constructor is not best way
//better to add them to prototype. when we used class, JS automatically added
//the defined methods into the __proto__ property
//all objects in JS have a prototype, which has all methods they can use
// prototype is common for a certain type of object(all instances). eg- a array object will
// point to a array prototype which is stored in a common place

function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

// admin
function Admin(username, email, title){
  User.call(this, username, email); //call User class constructor
  this.title = title;
}
//Admin has its own prototype, need to copy user prototype to admin prototype
//so admin gets all its methods
Admin.prototype = Object.create(User.prototype); 
// (Prototype inheritance model) 
// this gets added to 2nd level proto i.e __proto__ inside Admin's own __proto__ (Prototype chain)

Admin.prototype.deleteUser = function(user){  //this is added to admin's own __proto__ 
  // delete the user
};

const userOne = new User('ryu', 'ryu@thenetninja.co.uk');
const userTwo = new User('chun-li', 'chun.li@thenetninja.co.uk');
const userThree = new Admin('shaun', 'shaun@thenetninja.co.uk', 'black-belt ninja');

console.log(userThree);

console.log(userOne);

userOne.login().logout();

//every object type in JS ultimately inherits from Object which is the base type
//and has basic methods like toString()