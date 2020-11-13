const hamburger = document.querySelector('.header .navigation-topbar .navigation-list .hamburger');
const mobile_menu = document.querySelector('.header .navigation-topbar .navigation-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelector('.header .navigation-topbar .navigation-list ul a');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});
