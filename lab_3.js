// Створення 10 змінних з різними типами даних
let str = "Hello";            // Рядковий тип даних
let num = 42;                 // Числовий тип даних
let bool = true;              // Логічний тип даних
let arr = [1, 2, 3];          // Масив
let obj = { key: "value" };   // Об'єкт
let nul = null;               // Значення null
let undf = undefined;         // Значення undefined
let func = function() {};     // Функція
let sym = Symbol("symbol");   // Символьний тип даних
let bigInt = 9007199254740991n; // BigInt

/*
Багаторядковий коментар
Тут є 10 змінних з різними типами даних
*/

// Виконання перевірки типів
console.log(typeof str);      // string
console.log(typeof num);      // number
console.log(typeof bool);     // boolean
console.log(typeof arr);      // object
console.log(typeof obj);      // object
console.log(typeof nul);      // object (особливість JavaScript)
console.log(typeof undf);    // undefined
console.log(typeof func);     // function
console.log(typeof sym);      // symbol
console.log(typeof bigInt);   // bigint

// Використання операторів присвоєння для простих математичних операцій та виведення результату
let a = 5;
let b = 3;
let sum = a + b;
console.log("Сума:", sum);

// Використання логічних та побітових операторів
let x = 5;
let y = 3;
let result = (x > y) && (x !== y); // Логічний оператор && (і)
console.log("Результат логічного оператора &&:", result); // true

let z = 1;
let bitwiseResult = x & z; // Побітовий оператор &
console.log("Результат побітового оператора &:", bitwiseResult); // 1
