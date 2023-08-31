const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.navbar-mobile-menu');
const navMobileLink = document.querySelectorAll('.nav-mobile-link');
const msgStatus = document.querySelector('.msg-status');

const navMobileLinkSpread = [...navMobileLink];

// const section = document.querySelectorAll('section');
// const navLinksDesktop = document.querySelectorAll('.nav-items a');

// window.onscroll = () => {
// 	section.forEach((sec) => {
// 		let top = window.scrollY;
// 		let offset = sec.offsetTop;
// 		let height = sec.offsetHeight;
// 		let id = sec.getAttribute('id');
// 		if (top >= offset && top < offset + height) {
// 			navLinksDesktop.forEach(links => {
// 				links.classList.remove('active');
// 				document.querySelector('.nav-items a[href*=' + id + ']').classList.add('active');
// 			})
// 		}
// 	});
// };

burger.addEventListener('click', () => {
	navMobile.classList.toggle('open');
	burger.classList.toggle('open');
});

navMobileLinkSpread.forEach((item) => {
	item.addEventListener('click', () => {
		item.closest('nav').classList.remove('open');
		burger.classList.remove('open');
	});
});

// kod do formularza, który nie działa bo nie jest podpięty na hosting

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		msgStatus.classList.remove('success');
	}, 3000);
}

if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Wystąpił błąd!';

	setTimeout(() => {
		msgStatus.classList.remove('error');
	}, 3000);
}
