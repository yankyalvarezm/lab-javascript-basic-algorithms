// Iteration #1 - Names and Input
console.log('Exercise #1 - Names and Input');

let hacker1 = 'Dustin'; /** Driver */
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jean'; /** Navigator */
console.log(`The navigator's name is ${hacker2}`);

console.log('-----------------')

// Iteration #2 - Conditionals
console.log('Exercise #2 - Conditionals')

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration #3 - Loops
console.log('----------------');
console.log('Exercise #3 - Loops');
let name = "john";
let upper2 = "";
// let upperCaseName = name.toUpperCase();

for (let i = name.length - 1; i >= 0; i--) {
    let upper = (name[i].toUpperCase() + " ");
    upper2 += upper;
}

console.log(upper2);
let evaluator = hacker1.localeCompare(hacker2)

if (evaluator === 1) {
    console.log("The driver's name goes first")
} else if (evaluator === -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}
// 'str1'.localeCompare('str2');
