// let out = document.querySelectorAll('.out')
// let tmp = '';

// for (let i = 1; i <= 9; i++) {
//     tmp = tmp + 7 + ' * ' + i + ' = ' + 7 * i + '</br>';
// }
// out[0].innerHTML = tmp


// let tmp2 = '';

// for (let i = 1; i <= 9; i++) {
//     tmp2 = tmp2 + 8 + ' * ' + i + ' = ' + 8 * i + '</br>';
// }
// out[1].innerHTML = tmp2


//fffffff


// const num1 = +prompt('1) raqam kiriting');
// const num2 = +prompt('2) raqam kiriting');
// const num3 = +prompt('3) raqam kiriting');
// const num4 = +prompt('4) raqam kiriting');
// const num5 = +prompt('5) raqam kiriting');
// const numBoss = [num1, num2, num3, num4, num5]
// let tmp = 0;
// for (let i = 0; i < numBoss.length; i++) {
//     tmp += numBoss[i]

// }
// alert(tmp);

//fffffff


// const array = ['Jazz', 'Blues'];
// array.push('Rock-n-roll')
// console.log(array);

// let x = Math.floor(array.length / 2);
// array.splice(x, 1, 'classic')
// console.log(array);
// array.shift()
// console.log(array);

// array.unshift('Rap', 'Regea')

// console.log(array);


//fffffffff




// let salaries = {
//     "Bob": 1700,
//     "John": 6000,
//     "Evelina": 1200
// }

// function sumSalaries(sum) {
//     let total = 0;
//     for (let prop in sum) {
//         total = total + salaries[prop]
//     }
//     return total
// }
// console.log(sumSalaries(salaries));

//fffffff


// const sacLim = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let num1 = 0;
// let num2 = 0;

// for (let i = 0; i < sacLim.length; i++) {
//     if (sacLim[i] % 2 == 0) {
//         num1 = num1 + sacLim[i]
//     } else {
//         num2 = num2 + sacLim[i]
//     }

// }

// console.log(num1);
// console.log(num2);

//fffffff


// let arrAy = [-3, -2, 1, 2, 5]
// let finished = []
// for (let i = arrAy[0]; i <= arrAy.length; i++) {
//     if (!arrAy.includes(i)) {
//         finished.push(i)
//     }
// }
// console.log(finished)





// const arr = ['free', 'otto', 'flight', 'green'];
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] == arr[index].split('').reverse().join('')) {
//         console.log(arr[index]);
//     }

// }



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resolt = 0;
// for (let i = 0; i < numbers.length; i++) {
//     resolt += numbers[i]
//     resolt = resolt / numbers.length

// }
// console.log(resolt);

// let arrAy = 'dca';
// let resolt = arrAy.split('').sort().join('')
// console.log(resolt);



// let strings = ['num', 'resolt', 'onn'];
// let resolt = []
// for (let i = 0; i < strings.length; i++) {

//     resolt.push(strings[i].length)

// }
// console.log(resolt);


// let numbers = [1, 2, -90, 3, 4, 5, 6, 78, 7, 8, 9, 10];
// let max = Math.max();
// let min = Math.min();

// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));





// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let resolt = [];
// let sum = 0;
// let un = 0;
// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] % 2 == 0) {
//         resolt.push(numbers2[i])
//         sum = sum + numbers2[i]
//     } else {
//         un = un + numbers2[i]
//     }

// }
// console.log(numbers2);
// console.log(sum);
// console.log(un);



// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let outnumber = [];
// for (let i = 0; i < numbers2.length; i++) {
//     if (numbers2[i] % 2 == 1) {
//         outnumber.push(numbers2[i])
//     } else {

//     }

// }
// console.log(outnumber);


// let arr = prompt('Salom');
// let resolt = [];
// for (let i = 0; i < arr.length; i++) {
//     resolt.push(arr)
// }
// console.log(resolt);



// let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arrAy = []
// let total = 1;
// let resolt2 = 0;
// for (let i = 0; i < numbers3.length; i++) {
//     total = total * numbers3[i]
//     arrAy.push(total)
//     resolt2 += total
// }
// console.log(arrAy);
// console.log(resolt2);




// const pattern1 = /21/;
// const array = ['Uzbekistan', 'Tojikiston', 21];

// for (let index = 0; index < array.length; index++) {
//     if (pattern1.test(array[index])) {
//         console.log(array[index]);
//     }

// }




// let languages = {
//     english: "Hello!",
//     name1: "Nusratillo!",
//     year: 18,
//     age: function() {
//         console.log(`Hi my name is ${this.name1} meni yoshim ${this.year} da`);
//     }

// };

// let languages2 = {
//     name1: 'Davlat',
//     year: 18,
//     age: languages.age
// }

// languages2.age();
// languages.age();\


// let num = [1, 2, 3, 4, 5, 6, 7];
// let resolt = 7;

// function nuni(res) {
//     if (res.includes(resolt)) {
//         return 'CR7'
//     } else if (res.includes(1)) {
//         return 'messi'
//     } else {
//         return 'hato'
//     }
// }
// console.log(nuni(num));



// const arrAy = [11, 12, 34, 55, 66, 778, 88];

// function names(rs) {
//     let resolt = rs.slice(0, 3);

//     return resolt
// }
// console.log(names(arrAy));







//jasurbek ustozdi uy ishlari
// let arr = [3, 'salom', 2, 'el', true];

// function names(params) {
//     let number1 = [];
//     let string2 = [];
//     let bulion2 = [];
//     for (let i = 0; i < params.length; i++) {

//         if (typeof params[i] === 'string') {
//             string2.push(params[i])

//         } else if (typeof params[i] === 'number') {
//             number1.push(params[i])
//         } else if (typeof params[i] === 'boolean') {
//             bulion2.push(params[i])
//         }
//     }
//     string2.pop()
//     number1.splice(0, 1)

//     return { string2, number1, bulion2 }



// }
// console.log(names(arr));




const arrAy = [, 2, 3, 4, 5, 6, 7, 8];
let resolt2 = []

function resolt(arr, target) {
    if (arr.indexOf(target) !== -1) {
        resolt2.push(arr.indexOf(target))
    } else {
        resolt2.push()
    }
    return resolt2

}
console.log(resolt(arrAy, 3));