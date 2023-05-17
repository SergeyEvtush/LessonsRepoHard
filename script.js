"use strict";
/* Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице
1) Выведите на страницу текущую дату и время в 2-х форматах:
a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
б) '04.02.2020 - 21:05:33'
2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"
3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)
4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду */
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();




const options = {
	era: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
	timezone: 'UTC',
};
const options1 = {
	year: 'numeric',
	month: '2-digit',
	day: 'numeric',
	timezone: 'UTC',
	hour: '2-digit',
	minute: '2-digit',
	second:'2-digit'
};
const timeName = {
	sec :{
		onse: "секунда",
		manys: "секунды",
		manys1: "секунд"
	},
	min : {
		onse: "минута",
		manys: "минуты",
		manys1: "минут"
	},
	hour : {
		onse: "час",
		manys: "часа",
		manys1:"часов"
		
	}
};	
		
function setEnding(num, obj) {
	let time = '';

	if (num === 1||num % 10===1) {
		time = obj.onse;
		
	} else if (num > 10 && num < 20) { 
		time = obj.manys1;
	}
	else if ((num > 1 && num < 5) || (num % 10 > 1 && num % 10 < 5)||(num%10===0)) {
		time = obj.manys;
		
	} else if(num>=5||num%10>=5){ 
		time = obj.manys1;
		
	}
	
	
	return time;
 }	

 function startTime() {
	const date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	if (hours < 10) hours = "0" + hours;
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	console.log(`сегодня ${date.toLocaleString("ru", options)},${hours}:${minutes}:${seconds}`);
	
	setTimeout(startTime, 1000);
}




console.log(`${date.toLocaleString("ru", options1)}`);

console.log(`сегодня ${date.toLocaleString("ru", options)}, ${hours} ${setEnding(hours, timeName.hour)}, ${minutes} ${setEnding(minutes, timeName.min)}, ${seconds} ${setEnding(seconds, timeName.sec)}`);

startTime(date,hours,minutes,seconds,options);