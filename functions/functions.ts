function add(a: number, b: number) {
    return a + b;
}

let sum = add(10, 20);

console.log(sum);

// Optional parameters
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

console.log(multiply(1, 5, 3));


// Default parameters
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100)); // 95

function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let day = getDay(2019, 2);
console.log(day); // 28

// let day = getDay(undefined, 2);
// console.log(day);

// Anonymous function  
let myAdd = function (x: number, y: number) : number {  
    return x + y;  
};  
// Anonymous function call  
console.log(myAdd(5,4));  