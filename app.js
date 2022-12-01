// // Task1
// // element -in deyeri null ve undefined olmayanlari qaytar
// let data = [
//     { name: 'daniel', age: 45 },
//     { name: 'john', age: 34 },
//     { name: 'robert', age: null },
//     { name: 'jen', age: undefined },
//     { name: null, age: undefined }
// ];

// data.forEach(function (element) {
//     if ((element.name != null || element.name != undefined) && (element.age != null || element.age != undefined)) {
//         console.log(element);
//     }
// });

// Task 2
// her telebenin pointini 30 bal artirin;

// const students = [
//     { name: "Leyla", points: 500 },
//     { name: "Akif", points: 500 },
//     { name: "Fikret", points: 3000 },
//     { name: "Rashad", points: 500 },
//     { name: "Turkan", points: 1900 },
//     { name: "Sabir", points: 1000 },
//     { name: "Idris", points: 340 },
//     { name: "Nijat", points: 940 },
//     { name: "Ismet", points: 1780 },
// ];
// const map1 = students.map(element => console.log(element.points + 30));


// // Task 3
// // - isharesini / ile deyishin
// // output: ['08/14', '10/04', '04/21', 08/14, '10/04', '04/21'];

// let bdays = ['08-14', '10-04', '04-21', '08/14', '10/04', '04/21'];

// var bdays2 = bdays.map(function (element) {
//     console.log(element.replace('-', '/'));
// });




// // Task4  butun regemlerini yuvarlaqlashdirin
// let numbers = [1.5, 2.56, 5.1, 12.33];
// console.log(numbers.map(Math.ceil));


// Task 5
// Verilmish stringdeki ededleri cemleyin-- > reduce
const b = "5,4,3,2,1";
console.log(parseInt(b));