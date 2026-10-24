// NAMES ARRAY

let names = ['Eniola', 'Ayo', 'Lola', 'Dami', 'Victor', 'Caleb'];
//printing the first name
console.log(names[0]);
//printing the third name
console.log(names[2]);
//printing the last name using .length
console.log(names[names.length-1])

//printing every name in the array
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


/// NEW ARRAY
let numbers = [4, 7, 10, 13, 16, 19, 22]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


/// ARRAY OF 5 SCORES
let scores = [81, 56, 67, 94, 32]

let total_score = 0

for (let i = 0; i < scores.length; i++) {
    total_score += scores[i];
}
//Print the total score
console.log(total_score)


/// The largest number in an array

num_array = [12, 45, 7, 89, 23, 56]

let highest = num_array[0]
for (let i = 1; i < num_array.length; i++) {
    if (num_array[i] > highest) {
        highest = num_array[i]
    }
}

console.log(highest)



/// PRACTISING ARRAY METHODS

fruits = ['apples', 'oranges', 'banana', 'mango']
//using .push()
fruits.push('guava')
console.log(fruits)

//using .pop()
fruits.pop()
console.log(fruits)

//using .unshift()
fruits.unshift('cherry')
console.log(fruits)

// using .shift()
fruits.shift()
console.log(fruits)



