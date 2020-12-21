//1 Сумма квадратов массива
function Summa() {
	let arr = [3, 7, 8, 11, 1, 0, 9, 6];
	let newArr = [];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		let sqr = arr[i] * arr[i];
		newArr.push(sqr);
	}
	console.log('Квадраты элементов массива: ' + newArr);

	for (let j = 0; j < newArr.length; j++) {
		sum = sum + newArr[j];
	}

	console.log('Сумма квадратов элементов массива: ' + sum);
}

//2 Вывести индексы нулевых элементов массива, а потом удалить нули
let a = [3, 7, 0, 8, 11, 0, 1, 9, 0, 7];
a.forEach(function(element, index, array) {
	if (element === 0) {
		console.log('index: ' + index);
	}
});
let b = a.filter(function(el) {
	return el != 0;
});
console.log(b);

//3 Самое длинное слово в предложении и его индекc
let string = prompt('Введите предложение');
let myArray = string.split(" ");
console.log('String to array: ' + myArray);

function long_string(arr) {
	let longest = arr[0];
	let index = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i].length > longest.length) {
			longest = arr[i];
			index = i;
		}
	}
	console.log('Самое длинное слово: ' + longest + ' с индексом ' + index);
}
long_string(myArray);

//4 Среднюю длину слова в предложении
let string2 = prompt('Введите предложение');
let myArray2 = string2.split(" ");
console.log('String to array: ' + myArray2 + ' кол-во элементов: ' + myArray2.length);

let sum2 = [];
for (let i = 0; i < myArray2.length; i++) {
	sum2.push(myArray2[i].length);
}
console.log('sum2 ' + sum2);
let total = sum2.reduce((a, b) => a + b, 0);
console.log('сумма массива: ' + total + 'Средняя длина слова: ' + total / myArray2.length);