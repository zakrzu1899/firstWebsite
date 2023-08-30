const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.navbar-mobile-menu');
const navMobileLinkHome = document.querySelector('.nav-mobile-link-home');
const navMobileLinkAbout = document.querySelector('.nav-mobile-link-about');
const navMobileLinkOffer = document.querySelector('.nav-mobile-link-offer');
const msgStatus = document.querySelector('.msg-status');

burger.addEventListener('click', () => {
	navMobile.classList.toggle('open');
	burger.classList.toggle('open');
});

navMobileLinkHome.addEventListener('click', () => {
	navMobile.classList.remove('open');
	burger.classList.remove('open');
});

navMobileLinkAbout.addEventListener('click', () => {
	navMobile.classList.remove('open');
	burger.classList.remove('open');
});

navMobileLinkOffer.addEventListener('click', () => {
	navMobile.classList.remove('open');
	burger.classList.remove('open');
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
