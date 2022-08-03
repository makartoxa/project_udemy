"use strict";

// a = 15;
// console.log(a);


// console.log(number)
// let number = 5;

// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// console.log(name);
// var name = 'Ivan';


// // {
// // 	var result = 50;
// // }

// // console.log(result);
// const vehicleBodyWidth = 5000;
// const vehicleBodyLenght = 4000;
// console.log("Ширина автомобиля: " + vehicleBodyWidth + ', длина: ' + vehicleBodyLenght)


// // ['vruru', 'ewfbg', 'abkhc'].map(a => );

// // // Request
// // data


// // snake_case
// // UPPER_SNAKE_CASE
// // Kebab-case
// //PascalCase

// let COLOR_RED = '#F00';

// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const persone = `Alex`;

// const bool = false;
// // console.log(something); null
// let und;
// console.log(und);

// <!--Обьекты-->


// const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false
// };
// // console.log(obj.age);
// console.log(obj["name"]);

// <!-- Массивы -->


// let arr = ['plum.pmg', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);


// <!--Разница между обьектами и массивами-->

// const arr = ['a', 'b', 'c'];

// arr[10] = '123445';
// console.log(arr);

// const arrObj = {
// 	0: 'a',
// 	1: 'b',
// 	2: 'c',
// 	abc: {
// 		df: [{}, {}],
// 		def: {

// 		}

// 	}
// };

// const b = [];
// ;
// arrObj.b = '1234';
// arrObj['b'] = '1234';

// console.log(arrObj['b']);
// console.log(arrObj.b);

// // const obj = {a: 1, b: 2};
// const obj = {
// 	Anna: 500,
// 	'Alice': 800
// };
// console.log(obj.Anna);


// <!--Простое общение с пользователем на базовом уровне-->

// alert('Hello!);

// const result = confirm("Are you here?");

// console.log(result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer));
// console.log(answer +5);


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));


// <!--Интерполяция-->

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);


// <!--Операторы в JS-->

// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;  //префексный
// decr--;

// console.log(incr);
// console.log(decr);

// let incr = 10,
//     decr = 10;

// ++incr;  //постфиксный
// --decr;


// <!--Практика 1. Создание первого приложения-->

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько оценете его?', ''),
// 			c = prompt('Один из последних просмотреных фильмов?', ''),
// 			d = prompt('На сколько оценете его?', '');

// 		personalMovieDB.movies[a] = b;	
// 		personalMovieDB.movies[c] = d;	

// 		console.log(personalMovieDB);


// <!--Условия-->

// if (4 == 4) {
// 	console.log('okk!');
// } else {
// 	console.log('Error');
// }

// const num = 50;

// if (num < 49) {
// 	console.log('error');
// } else if (num > 100) {
// 	console.log('many');
// } else {
// 	console.log('ok!');
// }

// (num === 50) ? console.log('ok!') : console.log('error'); 

// const num = '50';

// switch (num) {
// 	case '49':
// 		console.log('неверно');
// 		break;
// 	case '100':
// 		console.log('неверно');
// 		break;
// 	case '50':
// 		console.log('в точку');
// 		break;
// 	default:
// 		console.log('не в этот раз');
// 		break;
// }

// <!--Логические операторы-->

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
// 	console.log('Я сыт!');
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 1

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola === 1 && fries) {
// 	console.log('Все сыты');
// } else {
// 	console.log('Мы уходим!')
// }

// console.log(1 && 0);
// console.log(1 && 0 && undefined && 2);
// console.log(null && 5);
// console.log(0 && 'gfuygucg');

// const hamburger = 1;
// const fries = null;
// const cola = 2;

// if (hamburger || cola || fries) {
// 	console.log('Все довольны');
// } else {
// 	console.log('Мы уходим!')
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && (cola === 2 || fries === 3) && nuggets) {
// 	console.log('Все довольны');
// } else {
// 	console.log('Мы уходим!')
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// console.log(!0);
// console.log( !1 && 2 || !3 );
// console.log( 25 || null && !3 );
// console.log( NaN || null || !3 || undefined || 5); 
// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// <!--Цыклы-->

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num <= 55);

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }

// <!--Цыкл в цыкле и метки-->

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}
// }

// *
// **
// ***
// ****
// *****
// ******

// let result ='';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
	
// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}

// 	result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {  // метки!!!!
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 5; k++) {
// 			if (k === 2) continue first; // break!
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// <--Упражнения-->

// for (let i = 2; i <= 16; i++) {
// 	    if (i % 2 === 0) {
// 	        continue;
// 	    } else {
// 	        console.log(i);
// 	    }
// 	}
	// let i = 2;
	// while (i <= 16) {
	// 	if (i % 2 === 0) {
	// 		i++;
	// 		continue;
	// 	} else {
	// 		console.log(i);
	// 	}
	// 		i++;
	// }

// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	// Пишем решение вот тут
//  for (let i = 0; i <= 5; i++) {
// 	arrayOfNumbers[i] = i + 5; 
//  }
// 	// Не трогаем
// 	return arrayOfNumbers;
// }

// // Место для первой задачи
// function firstTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];

// 	// Пишем решение вот тут
// 	for (let i = 0; i < arr.length; i++) {
// 			result[i] = arr[i];
// 	}
// 	 console.log(result);
// 	// Не трогаем
// 	return result;
// }

// // Место для второй задачи
// function secondTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];

// 	// Пишем решение вот тут
//  for (let i = 0; i < data.length; i++) {
// 			if (typeof(data[i]) === 'number') {
// 					data[i] = data[i] * 2;
// 			} else if (typeof(data[i]) === 'string') {
// 					data[i] = `${data[i]} - done`;
// 			}
// 	}

// 	console.log(data);
// 	// Не трогаем
// 	return data;
// }

// // Место для третьей задачи
// function thirdTask() {
// 	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	// Пишем решение вот тут
// 	for (let i = 0; i < data.length; i++) {
// 			result[i] = data[(data.length - 1) - i]
// 	}
	
// 	// Не трогаем
// 	return result;
// }


// <--Пирамида-->

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// <!--Практика 2. Применяем условия и цыклы-->

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };


		// for (let i = 0; i < 2; i++) {
		// 	const a = prompt('Один из последних просмотреных фильмов?', ''),
    //   			b = prompt('На сколько оценете его?', '');
		// 	if (a != null && b != null && a != '' & b != '' && a.length < 50) {
		// 		personalMovieDB.movies[a] = b;
		// 		console.log('done');
		// 	} else {
		// 		console.log('error');
		// 		i--;
		// 	}
		// }

		// <--Через while-->

		// let i = 0;
		// while(i < 2) {
		// 	const a = prompt('Один из последних просмотреных фильмов?', ''),
    //   			b = prompt('На сколько оценете его?', '');
		// 				if (a != null && b != null && a != '' & b != '' && a.length < 50) {
		// 					personalMovieDB.movies[a] = b;
		// 					i++;
		// 					console.log('done');
		// 				} else {
		// 					console.log('error');
		// 					i--;
		// 				}
		// }

		// if (personalMovieDB.count < 10) {
		// 	console.log("Просмотренно довольно мало фильмов");
		// } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
		// 	console.log("Вы классический зритель");
		// } else if (personalMovieDB.count >= 30) {
		// 	console.log("Вы киноман");
		// } else {
		// 	console.log("Произошла ошибка");
		// }

		// console.log(personalMovieDB);

		// <!--Функции, стрелочные функции (ES6)-->
    
		// let num = 20;

		// function showFirstMessage(text) {
		// 	console.log(text);
		// 	let num = 10;
		// 	console.log(num);
		// }

		// showFirstMessage("Hello, World!");
		// console.log(num);

		// <--Function DECLARATION-->

		// function foo () {
		// 	code
		// }
		//  function calc(a, b) {
		// 	return(a + b);
		// }

		// console.log(calc(4, 3));
		// console.log(calc(5, 6));
		// console.log(calc(7, 9));

		// function ret() {
		// 	let num = 50;

		// 	// 


		// 	return num;
		// }

		// const anotherNum = ret();
		// console.log(anotherNum);

		// <--Function EXPRESSION-->

		// let foo = function() {
		// 	code
		// }

		// const logger = function() {
		// 	console.log("Hello");
		// };

		// logger();

		// <--Стрелочные функции-->

		// const calc = (a, b) => {
		// 	console.log('1');
		// 	return a +b;
		// };


		// <!--Про аргументы функции-->

		// const usdCurr = 28;
		// const eurCurr = 32;


		// function convert (amount, curr) {
		// 	console.log(curr * amount);
		// }
		// convert (500, usdCurr);
		// convert (500, eurCurr);

// <!--Про важность return-->

// const usdCurr = 28;
// const discount = 0.9;

// function convert (amount, curr) {
//  	return curr * amount;
//  }
//  function promotion(result) {
// 	console.log(result * discount);
//  }

//  const res = convert (500, usdCurr);
//  promotion(res);



//  function test () {
// 	for(let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return
// 	}
// 	console.log('Done');
//  }

//  test();


//  function doNothing () {};
// console.log(doNothing() === undefined);


// <!--Упражнение по написанию кода, задание на работу с функциями-->

// function sayHello(name) {
// 	return 'Привет, ' + name +'!';
//  }
// console.log(sayHello('Anton'));

// function returnNeighboringNumbers(num) {
// 	return [num -1, num, num + 1];
// 	}


// 	function getMathResult(num, times) {	
// 		if (typeof (times) !== 'number' || times <= 0) {
// 			return num;
// 		}
// 		let result = '';
// 		for (let i = 1; i <= times; i++) {
// 			if (times === i) {
// 				result += `${num * i}`;
// 			} else {
// 				result += `${num * i} --- `;
// 			}
// 		}
// 		return result;
// 	}
// 	console.log(getMathResult(7, 9));

// 	<!--Методы и свойства у строк и чисел-->

// 	<--str-->

// 	const str = 'teSt';
// 	const arr = [1, 2, 4];

// 	console.log(str[2] = 'd');
// 	console.log(str.toUpperCase());
// 	console.log(str.toLowerCase());

// 	console.log(str);

// 	const fruit = "Some fruit";

// 	console.log(fruit.indexOf("fruit")); // Поиск подстроки!!!!
// 	console.log(fruit.indexOf("q"));

// 	const logg = "Hello world";

// 	console.log(logg.slice(6, 11));  slice вкл первый аргумент, второй аргумент не вкл.
// Либо указать один аргумент, с какого и до конца
//  console.log(logg.slice(6));
// 	console.log(logg.slice(-5, -1));

// 	console.log(logg.substring(6, 11));  //substring, так же как и slice, но не поддерживает отрицательные значения

// 	console.log(logg.substr(6, 5));  // substr, первый аргумент - с какого символа, второй количество символов!

// 	<--number-->

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// <!--Практика 3. Используем функции-->

// let numberOfFilms; 

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотреных фильмов?', ''),
// 					b = prompt('На сколько оценете его?', '');
// 		if (a != null && b != null && a != '' & b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }

// // rememberMyFilms();

// function detecPersonalevel () {
// 			if (personalMovieDB.count < 10) {
// 				console.log("Просмотренно довольно мало фильмов");
// 			} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
// 				console.log("Вы классический зритель");
// 			} else if (personalMovieDB.count >= 30) {
// 				console.log("Вы киноман");
// 			} else {
// 				console.log("Произошла ошибка");
// 			}
// 		}

// // detecPersonalevel ();

// function showMyDB (hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres () {
// 	for (let i = 1; i <= 3; i++) {
// 		// const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 		// personalMovieDB.genres[i - 1] = genre;
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// 	}
// }

// writeYourGenres ();


// <!--Упражнение по написанию кода 7: Продвинутые задания на использование функций-->

// function calculateVolumeAndArea(length) {
// 	if(length !== Math.round(length) || typeof(length) !== 'number' || length <= 0) {
// 		return `При вычислении произошла ошибка`;
// 	}
// 	const calculateVolume =  length * length * length;
// 	const calculateArea = 6 * (length * length);
// 	return `Объем куба: ${calculateVolume}, площадь всей поверхности: ${calculateArea}`;
// }
// console.log(calculateVolumeAndArea(-5));



// function getCoupeNumber(seatNumber) {
// 	if (seatNumber > 36 || seatNumber === 0) {
// 		return `Таких мест в вагоне не существует`;
// 	} 
	
// 	if (seatNumber !== Math.round(seatNumber) || seatNumber < 0 || seatNumber === '') {
// 		return `Ошибка. Проверьте правильность введенного номера места`;
// 	}
// // let seatNumber = 25;
// 	for (let i = 4; i <= 36; i = i + 4) {
// 		if (seatNumber <= i) {
// 			// console.log(i);
// 				return Math.ceil(i / 4);
// 			}
// 	} 
// }
// console.log(getCoupeNumber(33));

// <!--Упражнение по написанию кода Продвинутые задания на использование функций-->


// function getTimeFromMinutes(minutesTotal) {
// 	if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
// 			return "Ошибка, проверьте данные";
// 	}

// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;

// 	let hoursStr = '';

// 	switch (hours) {
// 			case 0: 
// 					hoursStr = 'часов';
// 					break;
// 			case 1:
// 					hoursStr = 'час';
// 					break;
// 			case 2:
// 			case 3:
// 			case 4:
// 					hoursStr = 'часа';
// 					break;
// 			default:
// 					hoursStr = 'часов';
// 	}

// 	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// getTimeFromMinutes(180);

// function findMaxNumber(a, b ,c, d) {
// 	if (typeof(a) !== 'number' ||
// 			typeof(b) !== 'number' ||
// 			typeof(c) !== 'number' ||
// 			typeof(d) !== 'number' ) {
// 				return 0;
// 			}
// 	return Math.max(a, b ,c, d);
// }
// console.log(findMaxNumber(1, 2, 10, 7));

// <!--Метод Фибоначчи-->

// function fib(num) {
// 	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// 			return "";
// 	}

// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 			if (i + 1 === num) {
// 					result += `${first}`;
// 					// Без пробела в конце
// 			} else {
// 					result += `${first} `;
// 			}

// 			let third = first + second;
// 			first = second;
// 			second = third;
// 	}

// 	return result;
// }

// fib(5);


// <!--Метод trim-->

// str.trim(); //убирает пробелы в начале и конце строки
// const a = prompt('Один из последних просмотреных фильмов?', '').trim(),

// let numberOfFilms;
//
// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }
//
// start();
//
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// };
//
// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотреных фильмов?', '').trim(),
// 					b = prompt('На сколько оценете его?', '');
// 		if (a != null && b != null && a != '' & b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done');
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }
//
// rememberMyFilms();
//
// function detecPersonalevel () {
// 			if (personalMovieDB.count < 10) {
// 				console.log("Просмотренно довольно мало фильмов");
// 			} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
// 				console.log("Вы классический зритель");
// 			} else if (personalMovieDB.count >= 30) {
// 				console.log("Вы киноман");
// 			} else {
// 				console.log("Произошла ошибка");
// 			}
// 		}
//
// detecPersonalevel ();
//
// function showMyDB (hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }
//
// showMyDB(personalMovieDB.privat);
//
// function writeYourGenres () {
// 	for (let i = 1; i <= 3; i++) {
// 		// const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 		// personalMovieDB.genres[i - 1] = genre;
// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// 	}
// }
//
// writeYourGenres ();

// <!-- CallBack - функции-->

// function first () {
// 	// Do domething
// 	setTimeout(function() {
// 		console.log(1);
// 	}, 500);
// }
//
// function second() {
// 	console.log(2);
// }
//
// first();
// second();



// function learnJS(lang, callback) {
// 	console.log(`Я учу: ${lang}`);
// 	callback();
// }
// learnJS('JavaScript', function() {
// 	console.log('Я прошел этот урок!');
// });
// function done () {
// 	console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);


// <!--Объекты, деструктуризация объектов (ES6)-->

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	},
// 	makeTest: function () {
// 		console.log('Test');
// 	}
// };
//
// options.makeTest();

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);


// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// <--перебор объектов-->
// let counter = 0;
// for (let key in options) {  // for of!
// 	if (typeof(options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);

// <--Деструктуризация объектов-->

// const options = {
// 	name: 'test',
// 	width: 1024,
// 	height: 1024,
// 	colors: {
// 		border: 'black',
// 		bg: 'red'
// 	}
// };

// const {border, bg} = options.colors;
// console.log(bg);


// <!--Массивы и псевдомассивы-->

// const arr = [1, 2 , 3, 6, 8];

// arr.pop(); //удаляет последний объект
// arr.push(10); //добавляет в конец массива указанный элемент

// console.log(arr);

//            перебор массива

//   1
// const arr = [1, 2 , 3, 6, 8];

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
// for (let value of arr) {
// 	console.log(value);
// }  

//   2

// const arr = [1, 2 , 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// const arr = [1, 2 , 3, 6, 8];

// // callback функции 
// // item - название, i - номер по порядку массива,
// // arr - ссылка на массив, который мы перебираем 
// arr.forEach(function(item, i, arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//Объединение элементов в массиве
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);
//
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join('; '));

// Метод сортировки
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// const arr = [1, 22 , 13, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
// 	return a - b;
// }

//Псевдомассивы

// <!--Передача по ссылке или по значению, Spread операторы (ES6 ES9)-->

// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Ссылку
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// Поверхосные копии

// function copy(mainObj) {
//     let objCopy = {};
//
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// newNumbers.c.x = 10;
// // console.log(newNumbers);
// // console.log(numbers);
//
// // второй метод assing
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// // console.log(Object.assign(numbers, add)) // независимая поверхсная копия обьекта
//
// const clone = Object.assign({}, add)
// clone.d = 20;
// // console.log(add);
// // console.log(clone);
//
// // третий метод создания поверхосных копий
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice(); // позволяет скопировать старый массив
// newArray[1] = 'asdbjsah';
// console.log(newArray);
// console.log(oldArray);
//
// // 4й метод, оператор разворота, spread operator
//
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//
// console.log(internet);
//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// log(...num);
//
// const array = ['a', 'b'];
// const newArray = [...array];
//
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
// console.log(newObj);

<!--Упражнение 10-->

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;
//
//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });
//
//         return str;
//     }
// };
//
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
//
//
// function showExperience(plan) {
//     const {exp} = personalPlanPeter.skills;
//     return exp;
// }
// showExperience(personalPlanPeter);
//
//
// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for(let key in programmingLangs) {
//         str+= `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return str
// }
//
// showProgrammingLangs(personalPlanPeter)
//

<!--Task 11-->

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];
//
// function showFamily(arr) {
//     if (arr.length === 0) {
//         return `Семья пуста`
//     }
//     const newFamily = family.join(' ');
//     let str = `Семья состоит из: ${newFamily}`
//     return  str
// }
// showFamily(family)
//
//
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
//
// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// <!--Task 12-->

// const someString = 'This is some strange string';
//
// function reverse(str) {
//
//     if (typeof(str) !== "string" ) {
//         return `Ошибка!`
//     }
//     let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// reverse(someString);
// console.log(reverse(someString));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
//
// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';
//
//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });
//     return str;
// }

