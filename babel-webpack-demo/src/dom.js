console.log('dom file');

const body = document.querySelector('body');

export const styleBody = () => {
	body.style.background = 'peachpuff';
};

export const addTitle = (text) => {
	const title = document.createElement('h1');
	title.textContent = text;
	body.appendChild(title);
};

export const contact = 'pc828@snu.edu.in';

// export { styleBody, addTitle, contact}; 
// // if we want to export all together
// // with this no need to write export keyword with everything we want to export
