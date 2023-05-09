"use strict";
//чуть заморочился

let lang = 'ru';

const russianDays = [
	'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
];
const englishDays = [
	'Sunday',
  'Monday',
  'Tuesday ',
  'Wednesday',
  'Thursday ',
  'Friday ',
  'Saturday '
];
//first task

const first = document.querySelector('.first-task');
const ul = first.querySelector('.days-list');
const checks = first.querySelectorAll('.lang');
checks.forEach(el => { 
	el.addEventListener('click', (e) => {
		const target = e.target;
		const name = target.name;
		checks.forEach(el => {
			if (el.classList.contains('active')) {
				el.classList.remove('active');
				
			}
			if (el.checked === true) {
				el.checked = false;
			}
		});
		target.classList.toggle('active');
		target.checked = true;
		ul.innerHTML = '';
		if (name == 'ru') {
			russianDays.forEach(el => {
				ul.append(createDays(el));
			});
		} else if (name == 'en') { 
			englishDays.forEach(el => {
				ul.append(createDays(el));
			});
		}
	});
});

function createDays(day) {
	const li = document.createElement('li');
				li.classList.add('day');
				li.innerText = day;
	return li;
}
 //second tasc
 const second = document.querySelector('.second-task');
const ul2 = second.querySelector('.days-list');
const checks2 = second.querySelectorAll('.lang');

checks2.forEach(el => { 
	el.addEventListener('click', (e) => {
		const target = e.target;
		const name = target.name;
		checks2.forEach(el => {
			if (el.classList.contains('active')) {
				el.classList.remove('active');
				
			}
			if (el.checked === true) {
				el.checked = false;
			}
		});
		target.classList.toggle('active');
		target.checked = true;
		ul2.innerHTML = '';
		switch (name) { 
			case 'ru':
				russianDays.forEach(el => {
					ul2.append(createDays(el));
				});
				break;
			case 'en':
				englishDays.forEach(el => {
					ul2.append(createDays(el));
				});
				break;
			default:
				ul2.innerHTML = '';
		}
	
	});
});

//third task
const third = document.querySelector('.third-task');
const ul3 = third.querySelector('.days-list');
const checks3 = third.querySelectorAll('.lang');

const allDays = [russianDays, englishDays];
checks3.forEach(el => { 
	el.addEventListener('click', (e) => {
		const target = e.target;
		const name = target.name;
		checks3.forEach(el => {
			if (el.classList.contains('active')) {
				el.classList.remove('active');
				
			}
			if (el.checked === true) {
				el.checked = false;
			}
		});
		target.classList.toggle('active');
		target.checked = true;
		ul3.innerHTML = '';
		allDays[`${name}`].forEach(el => {
			ul3.append(createDays(el));
		});
	});
});

//fours task
const namePerson = document.querySelector('#title');

namePerson.addEventListener('change', (e) => {
	e.preventDefault();
	console.log(namePerson.value);
	namePerson.value == "Артем" ? console.log('директор') :
		namePerson.value == "Александр" ? console.log('преподаватель') :
			console.log('студент');
	

});