import {styleBody, addTitle, contact} from './dom';
import users, { getPremUsers } from './data';

console.log('index file');

const greet = (name) => {
	console.log(`hello ${name}`);
}

greet('luigi');
greet('mario');


addTitle('Parth');
styleBody();
addTitle(contact);



const premUsers = getPremUsers(users);
console.log(users, premUsers);