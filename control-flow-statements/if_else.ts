// if statement
const max1 = 100;
let counter1 = 100;

if (counter1 < max1) {
    counter1++;
}

console.log(counter1); // 100

// if…else statement
const max2 = 100;
let counter2 = 100;

if (counter2 < max2) {
    counter2++;
} else {
    counter2 = 1;
}

console.log(counter2);

// Ternary operator ?
const max3 = 100;
let counter3 = 100;

counter3 < max3 ? counter3++ : counter3 = 1;

console.log(counter3);

// if…else if…else statement
let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)