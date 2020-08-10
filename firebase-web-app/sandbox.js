const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

//add recipie to UI
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

//delete from UI
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id){
      recipe.remove(); //remove from DOM
    }
  });
};

// real-time listener
// //firebase takes snapshot after every change, onsnapshot fires the 
// function after every change
// it returns a function that we store in unsub - which cancels the
// realtime listener - unsuscribe to changes
const unsub = db.collection('recipes').onSnapshot(snapshot => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach(change => {
    const doc = change.doc; //actual doc rather than just the change
    if(change.type === 'added'){
      // console.log(doc);
      addRecipe(doc.data(), doc.id)
    } else if (change.type === 'removed'){
      deleteRecipe(doc.id);
    }
  });
});

// save documents
form.addEventListener('submit', e => {
  e.preventDefault();

  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now)
  };

  db.collection('recipes').add(recipe).then(() => {
    console.log('recipe added');
    form.reset();
  }).catch(err => {
    console.log(err);
  });

});

// deleting data from firebase
list.addEventListener('click', e => {
  // console.log(e)
  if(e.target.tagName === 'BUTTON'){
    const id = e.target.parentElement.getAttribute('data-id');
    // console.log(id);
    db.collection('recipes').doc(id).delete().then(() => {  //.doc(id) gets reference to a particular doc with that id
      console.log('recipe deleted');
    });
  }
});

//unsub from realtime database changes i.e just dont update the UI
button.addEventListener('click', e => {
  unsub();
  console.log('unsubscribed');
});