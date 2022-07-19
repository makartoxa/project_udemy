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
