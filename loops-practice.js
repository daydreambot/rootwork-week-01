
 //Print numbers from 1 to 20
console.log("Numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Print even numbers from 1 to 20
console.log("Even numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Print numbers from 10 down to 1
console.log("Numbers from 10 down to 1:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Print the 5 times table from 1 to 12
console.log("5 Times Table:");
for (let i = 1; i <= 12; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Calculate the sum of numbers from 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 10:", sum);
