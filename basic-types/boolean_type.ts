// NOT operator
const pending: boolean = true;
const notPending = !pending; // false
console.log(pending, notPending); // false

const hasError: boolean = false;
const completed: boolean = true;

// AND operator
let result = completed && hasError; 
console.log(result); // false

// OR operator
result = completed || hasError; 
console.log(result); // true