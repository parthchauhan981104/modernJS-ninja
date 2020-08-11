"use strict";

// Babel Command - npx babel before.js --watch -o after.js 
// Webpack command - npm run webpack
var greet = function greet(name) {
  console.log("hello ".concat(name));
};

greet('mario');
