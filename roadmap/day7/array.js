let numbers = [1, 2, 4];
// let numbers = [1, 2, 4];

numbers.push(6);
// numbers.push(6);

numbers.pop();
// numbers.pop();

numbers.unshift(10);
// numbers.unshift(10);

numbers.shift();
// numbers.shift();

// console.log(numbers.slice(3, ));
// // console.log(numbers.slice(3, ));

numbers.splice(2, 0, 3);
numbers.splice(2, 0, 23);
numbers.splice(4, 0, 34);
// numbers.splice(2, 0, 3);
// numbers.splice(2, 0, 23);
// numbers.splice(4, 0, 34);

numbers.splice(4, 1);
numbers.splice(2, 1);
// numbers.splice(4, 1);
// numbers.splice(2, 1);

// console.log(numbers);
// // console.log(numbers);

// let copiedNumbers = Array.from(numbers);
// // let copiedNumbers = Array.from(numbers);

// console.log(copiedNumbers);
// // console.log(copiedNumbers);

console.log(numbers.indexOf(30));
// console.log(numbers.indexOf(30));

console.log([1, 2, 4].join(','));