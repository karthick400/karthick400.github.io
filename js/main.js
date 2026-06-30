document.addEventListener('DOMContentLoaded', () => {
	const fadeElements = document.querySelectorAll('.fade-in-up');
	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('#navbar a[href^="#"]');

	const fadeObserver = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.15 });

	fadeElements.forEach((element) => fadeObserver.observe(element));

	const setActiveLink = (id) => {
		navLinks.forEach((link) => {
			const targetId = link.getAttribute('href').slice(1);
			link.classList.toggle('active', targetId === id);
		});
	};

	const sectionObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				setActiveLink(entry.target.id);
			}
		});
	}, { threshold: 0.5 });

	sections.forEach((section) => sectionObserver.observe(section));

	navLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			const target = document.querySelector(link.getAttribute('href'));
			if (!target) {
				return;
			}

			event.preventDefault();
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		});
	});
});

