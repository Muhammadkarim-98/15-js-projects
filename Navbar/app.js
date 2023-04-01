const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	// good solution
	// if (links.classList.contains('show-links')) {
	// 	links.classList.remove('show-links')
	// } else { links.classList.add('show-links') }

	// Best solution
	links.classList.toggle('show-links')
})
