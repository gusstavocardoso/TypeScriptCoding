let skills: string[] = [];

skills[0] = "Problem Solving";
skills[1] = "Programming";

skills.push('Software Design');

console.log(skills);

let skill = skills[0];
console.log(typeof(skill));

// TypeScript array properties and methods
let series = [1, 2, 3];
console.log(series.length);

// Storing values of mixed types
let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4]; 
console.log(scores);
