const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;
	
	// Send the form data to your email address using a service like Formspree
	// You can also use a server-side script to handle the form submission
});
