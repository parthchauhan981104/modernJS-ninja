const getTodos = (callback) => {
	const request = new XMLHttpRequest();

	request.addEventListener('readystatechange', () => { //fires whenever there is a state change - 4 possible changes
		console.log(request, request.readyState);
		if(request.readyState === 4 && request.status === 200) { 
		//4 is when request is completed but request can be completed even when
		//we try to access a incorrect endpoint, so also need to check for success status code
			// console.log(request.responseText);
			const data = JSON.parse(request.responseText); //converts JSON string into javascript object
			callback(undefined, data); //no error
		} else if(request.readyState === 4) {
			// console.log("Could not fetch data");
			callback("Could not fetch data", undefined);  //no data
		}
	});

	request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	request.send();
};

console.log(1);
console.log(2);

//javascript is naturally synchronous, but we can make async requests that do not block 
//the normal execution of code

getTodos((err, data) => {         //non-blocking asynchronous code
	console.log('callback fired');
	if(err){
		console.log(err);
	} else {
		console.log(data); 
	}
});

console.log(3);
console.log(4);

//output will be
// 1
// 2
// 3
// 4
// output of callback
// 

///////////////////////////////////////////////////////////////////////

//PROMISE EXAMPLE

const getSomething = () => {
	return new Promise((resolve, reject) => {
		//fetch something
		resolve('some data');  //either resolve or reject
		//reject('some error');
	});  //promise has 2 outcomes - resolved/rejected just like above xml request
}


//method 1
getSomething().then((data) => {
	console.log(data);
}, (err) => {
	console.log(err);
});
//a promise is returned, use .then method on it. fire first callback function
//when the promise is resolved. second if it is rejected.
//

//method 2 - neater
getSomething().then((data) => {
	console.log(data);
}).catch(err => {
	console.log(err);
});

//PROMISE CHAINING example

const getTodos2 = (resource) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
  
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4){
        reject('could not fetch the data');
      }
  
    });
    
    request.open('GET', resource);
    request.send();
  });

};

getTodos2('json/luigi.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos2('json/mario.json');  //a promise is returned
}).then(data => {  						//chain a .then method to that promise
  console.log('promise 2 resolved:', data);
  return getTodos2('json/shaun.json');
}).then(data => {
  console.log('promise 3 resolved:', data);
}).catch(err => {
  console.log('promise rejected:', err);
});

///////////////////////////////////////////////////////////////////////

//FETCH API

fetch('json/luigi.json').then(response => {
    //console.log('resolved', response); 
    ////response doesnt have the data we need, need to use .json to get the json data
    return response.json();  //this is again a promise
  }).then(data => {
    console.log(data);
  }).catch(err => {
    console.log(err);
  });

//with fetch API, promise is only rejected in case of some network error
//otherwise (like in case of incorrect endpoint) promise is still resolved,
// response is returned, but it will have some error code

///////////////////////////////////////////////////////////////////////

// async & await - to chain promises together in neater way rather than .then

// the async function is non blocking, returns promise
// bundles up all our async code inside a function
// much cleaner, chaining neater

const getTodos = async () => {

  let response = await fetch('json/luigi.json'); 
  // await keyword stops javascript from assigning value to variable until 
  // promise has been resolved
  
  if(response.status !== 200){
    throw new Error('cannot fetch the data');
    // if we throw a Error inside a async function, promise is rejected
  }

  let data = await response.json();

  // can chain multiple await
  // let response = await fetch('json/mario.json'); 
  // let data = await response.json();
  
  return data;

};

console.log(1);
console.log(2);

// const test = getTodos(); 
// //test is a promise as asynchronous func always returns promise 
// // even if there is nothing inside the function
// console.log(test);

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));

console.log(3);
console.log(4);

// console.log(getTodos());
// 

//output is
// 1
// 2
// 3
// 4
// result