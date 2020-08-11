import './styles/dropdown.css';

class Dropdown {
  constructor(container){  
  //container has the trigger and content divs
  //2 containers - we'll make separate class instance for each
    this.container = container;
    this.trigger = container.querySelector('.trigger');
    this.content = container.querySelector('.content');
  }
  init(){
    this.trigger.addEventListener('click', () => {
      this.trigger.classList.toggle('active');
      this.content.classList.toggle('active');
    });
  }
}

export { Dropdown as default };