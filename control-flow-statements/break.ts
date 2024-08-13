// Using TypeScript break to terminate a loop
let products = [
    { name: 'phone', price: 700 },
    { name: 'tablet', price: 900 },
    { name: 'laptop', price: 1200 }
];

for (var b = 0; b < products.length; b++) {
    if (products[b].price == 900)
        break;
}

console.log(products[b]);

// Using the break statement to break a switch
let offer = 0;
let product = products[1];

switch (product.name) {
    case 'phone':
        offer = 5;
        break;
    case 'tablet':
        offer = 10;
        break;
    case 'laptop':
        offer = 15;
        break;
}

console.log(`There is a ${offer}% on ${product.name}.`);
