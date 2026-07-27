const marvel_heros = ["Iron Man", "Thor", "Hulk"];
const dc_heros = ["Superman", "Batman", "Wonder Women"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros)

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros)

const array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = array.flat(Infinity);

// console.log(real_another_array)

console.log(Array.isArray("Kushal"));
console.log(Array.from("Kushal"));
console.log(Array.from({ name: "Kushal" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));