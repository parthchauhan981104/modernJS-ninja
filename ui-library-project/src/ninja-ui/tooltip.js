import './styles/tooltip.css';

class Tooltip {
  constructor(element){
    this.element = element;
    this.message = element.getAttribute('data-message');
  }
  init(){  //initialize the component
    const tip = document.createElement('div');
    tip.classList.add('tip');
    tip.textContent = this.message;
    this.element.appendChild(tip);

    this.element.addEventListener('mouseenter', () => { //fires once when we enter the element
      tip.classList.add('active');
    });
    this.element.addEventListener('mouseleave', () => {
      tip.classList.remove('active');
    });
  }
}


export { Tooltip as default };