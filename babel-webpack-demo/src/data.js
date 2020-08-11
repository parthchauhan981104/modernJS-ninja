const users = [
  { name: 'mario', premium: true },
  { name: 'luigi', premium: false },
  { name: 'yoshi', premium: true },
  { name: 'toad', premium: true },
  { name: 'peach', premium: false }
];

// export default users;

const getPremUsers = (users) => {
  return users.filter(user => user.premium);
};


//export default users;
// we can only have one default export value per file
export { getPremUsers, users as default };