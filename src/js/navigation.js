var navbar = document.querySelector('section.navigation');
var header = document.querySelector('div.header');
var links = document.querySelector('div.links');
var headerHeight = header.clientHeight;
var minHeightTrue = (headerHeight === 55 ? true : false);
var dropped = false;
var scrolled = false;
window.addEventListener('scroll', function() {
	var scrollHeight = window.scrollY;
	if (scrollHeight >= headerHeight) {
		scrolled = true;
		links.style.top = '0';
		links.style.height = dropped ? (minHeightTrue ? '110px' : '12.5vh') : (minHeightTrue ? '55px' : '7.5vh');
		links.style.position = 'fixed';
	} else if (scrolled) {
		links.style.position = 'static';
		links.style.height = dropped ? (minHeightTrue ? '110px' : '12.5vh') : (minHeightTrue ? '55px' : '7.5vh');
	}
})

var aboutUsLink = document.querySelector('div.link.about-us');
var curriculumLink = document.querySelector('div.link.curriculum');
var admissionsLink = document.querySelector('div.link.admissions');
var infrastructureLink = document.querySelector('div.link.infrastructure');

var aboutUsBar = document.querySelector('div.level2.about-us');
var curriculumBar = document.querySelector('div.level2.curriculum');
var admissionsBar = document.querySelector('div.level2.admissions');
var infrastructureBar = document.querySelector('div.level2.infrastructure');


function show(bar, link) {
	dropped = true;
	if (minHeightTrue) {
		navbar.style.height = '165px';
		header.style.height = '55px';
		links.style.height = '110px';
	} else {
		navbar.style.height = '20%';
		header.style.height = '37.5%';
		links.style.height = '12.5vh';
	}
	link.style.background = '#000029';
	bar.classList.add('flex');
	bar.classList.remove('nodisplay');	
}
function hide(bar, link) {
	dropped = false;
	navbar.style.height = minHeightTrue ? '110px' : '15%';
	header.style.height = '50%';
	links.style.height = minHeightTrue ? '55px' : '7.5vh';
	link.style.background = 'inherit';
	bar.classList.add('nodisplay');
	bar.classList.remove('flex');
}

aboutUsLink.addEventListener('click', function() {
	hide(curriculumBar, curriculumLink);
	hide(admissionsBar, admissionsLink);
	hide(infrastructureBar, infrastructureLink);
	if (aboutUsBar.classList.contains('nodisplay')) {
		show(aboutUsBar, aboutUsLink);
	} else {
		hide(aboutUsBar, aboutUsLink);
	}
})
curriculumLink.addEventListener('click', function() {
	hide(aboutUsBar, aboutUsLink);
	hide(admissionsBar, admissionsLink);
	hide(infrastructureBar, infrastructureLink);
	if (curriculumBar.classList.contains('nodisplay')) {
		show(curriculumBar, curriculumLink);
	} else {
		hide(curriculumBar, curriculumLink);
	}
})
admissionsLink.addEventListener('click', function() {
	hide(aboutUsBar, aboutUsLink);
	hide(curriculumBar, curriculumLink);
	hide(infrastructureBar, infrastructureLink);
	if (admissionsBar.classList.contains('nodisplay')) {
		show(admissionsBar, admissionsLink);
	} else {
		hide(admissionsBar, admissionsLink);
	}
})
infrastructureLink.addEventListener('click', function() {
	hide(aboutUsBar, aboutUsLink);
	hide(curriculumBar, curriculumLink);
	hide(admissionsBar, admissionsLink);
	if (infrastructureBar.classList.contains('nodisplay')) {
		show(infrastructureBar, infrastructureLink);
	} else {
		hide(infrastructureBar, infrastructureLink);
	}
})
