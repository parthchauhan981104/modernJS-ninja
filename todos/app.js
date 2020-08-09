const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  list.innerHTML += html;
};

// add todos
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();  //reset all input fields inside form
  }

});

const filterTodos = term => {

  // add filtered class
  Array.from(list.children)  //make an array from the html collection
    .filter(todo => !todo.textContent.toLowerCase().includes(term))  //todos which don't include the term
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term)) //todos which include the term
    .forEach(todo => todo.classList.remove('filtered'));

};

// delete todos
list.addEventListener('click', e => { 

  if(e.target.classList.contains('delete')){  // used event delegation, attach only 1 event listener to the whole list(ul)
    e.target.parentElement.remove();  //parent of the i tag is the li tag
  }

});

// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);

});