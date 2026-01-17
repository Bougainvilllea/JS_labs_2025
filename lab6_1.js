// a

// let x = parseFloat(prompt("Введите значение x для вычисления sin(x):"));
// alert(`sin(${x}) = ${Math.sin(x)}`);

// b 

// let x1 = parseFloat(prompt("Введите x1 первой вершины квадрата:"));
// let y1 = parseFloat(prompt("Введите y1 первой вершины квадрата:"));
// let x2 = parseFloat(prompt("Введите x2 противоположной вершины квадрата:"));
// let y2 = parseFloat(prompt("Введите y2 противоположной вершины квадрата:"));

// let x = parseFloat(prompt("Введите x точки:"));
// let y = parseFloat(prompt("Введите y точки:"));

// let minX = Math.min(x1, x2);
// let maxX = Math.max(x1, x2);
// let minY = Math.min(y1, y2);
// let maxY = Math.max(y1, y2);

// if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
//     alert("Точка принадлежит квадрату!");
// } else {
//     alert("Точка НЕ принадлежит квадрату!");
// }

// c 

// let num = parseInt(prompt("Введите натуральное число:"));
// let found = false;

// for (let a = 1; a <= Math.sqrt(num); a++) {
//     let b = Math.sqrt(num - a*a);
//     if (b === Math.floor(b) && b > 0) {
//         found = true;
//         break;
//     }
// }

// alert(found ? "Можно представить в виде суммы двух квадратов" : "Нельзя представить в виде суммы двух квадратов");

// d

// let email = prompt("Введите email:");
// if (!email.includes('@')) {
//     alert("Oтсутствует символ @!");
// } else {
//     alert("Cодержит символ @");
// }

// e

// let s = prompt("Введите строку:");
// let latinCount = 0;

// for (let char of s) {
//     if (/[a-zA-Z]/.test(char)) latinCount++;
// }

// let percentage = (latinCount / s.length * 100).toFixed(2);
// alert(`Доля латинских букв: ${percentage}%`);


// f

// let s = prompt("Введите строку:");
// let words = s.split(/\s+/).filter(word => word.length > 0);
// let uniqueWords = [...new Set(words)];
// alert(uniqueWords.join(' '));


// g

// let n = parseInt(prompt("Введите количество чисел:"));
// let arr = Array.from({length: n}, () => Math.floor(Math.random() * 100));

// let output = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//     output += arr[i] + " ";
//     if ((arr.length - i) % 5 === 0) output += "\n";
// }

// alert("Массив в обратном порядке:\n" + output);


// h

// let n = parseInt(prompt("Введите порядок матрицы n:"));
// let matrix = Array.from({length: n}, () => 
//     Array.from({length: n}, () => Math.floor(Math.random() * 100)));


// let diagValues = [];
// for (let i = 0; i < n; i++) {
//     diagValues.push(matrix[i][i]);         
//     diagValues.push(matrix[i][n-1-i]);    
// }

// let minDiag = Math.min(...diagValues);
// let maxDiag = Math.max(...diagValues);


// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if (i === j || i + j === n - 1) {
//             if (matrix[i][j] !== minDiag && matrix[i][j] !== maxDiag) {
//                 matrix[i][j] = 0;
//             }
//         }
//     }
// }

// let output = "Результат:\n";
// for (let row of matrix) {
//     output += row.join(' ') + '\n';
// }
// alert(output);


// i

// let n = parseInt(prompt("Введите количество дней для добавления:"));
// let date = new Date();
// date.setDate(date.getDate() + n);
// alert(`Новая дата: ${date.toLocaleDateString()}`);


// j

// let today = new Date();
// let currentYear = today.getFullYear();
// let sep1 = new Date(currentYear, 8, 1); 

// if (today > sep1) {
//     sep1.setFullYear(currentYear + 1);
// }

// let diffMonths = (sep1.getFullYear() - today.getFullYear()) * 12 + 
//                  (sep1.getMonth() - today.getMonth());

// alert(`До 1 сентября осталось ${diffMonths} месяцев`);