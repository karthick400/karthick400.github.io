document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('#hamburger');
	const navbar = document.querySelector('#navbar');
	const navLinks = document.querySelector('.nav-links');

	if (!hamburger || !navLinks || !navbar) {
		return;
	}

	hamburger.addEventListener('click', (event) => {
		event.stopPropagation();
		navbar.classList.toggle('nav-open');
		hamburger.setAttribute('aria-expanded', String(navbar.classList.contains('nav-open')));
	});

	navLinks.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			navbar.classList.remove('nav-open');
			hamburger.setAttribute('aria-expanded', 'false');
		}
	});

	document.addEventListener('click', (event) => {
		if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
			navbar.classList.remove('nav-open');
			hamburger.setAttribute('aria-expanded', 'false');
		}
	});
});

