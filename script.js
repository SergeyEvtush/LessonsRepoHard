"use strict";

/* Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

1) Создать массив week и записать в него дни недели в виде строк

Вывести на экран все дни недели
Каждый из них с новой строчки
Выходные дни - курсивом
Текущий день - жирным шрифтом(использовать объект даты)
2) Запушить проект в репозиторий для усложненных заданий на Github */
const listDays = document.querySelector('.list-days');
const days = [
	'воскресенье',
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
];

const weekDays = (date, daysArr) => {
	return daysArr[date.getDay()];
};
const date = new Date();
days.forEach((el,index)=>
{
	const li = document.createElement('li');
	li.innerText = el;
		if (weekDays(date, days) === el) { 
			li.classList.add('bold');
		}
		if (index === 0 || index === 6) { 
			li.classList.add('cursive');
	}
	listDays.append(li);
	}
);
