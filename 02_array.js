let marvel_heros = ["spiderman", "ironman", "captain america", "thor"];
const dc_heros = ["batman", "superman", "wonderwoman", "flash"];

marvel_heros.push(dc_heros);

console.log(marvel_heros); // o/p -> [ 'spiderman', 'ironman', 'captain america', 'thor', [ 'batman', 'superman', 'wonderwoman', 'flash' ] ]

console.log(marvel_heros[4][1]); // o/p -> superman

marvel_heros = marvel_heros.concat(dc_heros);
console.log(marvel_heros); // o/p -> [ 'spiderman', 'ironman', 'captain america', 'thor', 'batman', 'superman', 'wonderwoman', 'flash' ]

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros); // o/p -> [ 'spiderman', 'ironman', 'captain america', 'thor', 'batman', 'superman', 'wonderwoman', 'flash', 'batman', 'superman', 'wonderwoman', 'flash' ]


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // o/p -> 100 200 300