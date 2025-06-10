const fruits = ['apple', 'banana', 'orange'];

// ✅ Accessing values
console.log(fruits[0]); // apple

// 🔍 Searching
console.log(fruits.indexOf('banana')); // 1
console.log(fruits.includes('orange')); // true

// ➕ Add
fruits.push('mango'); // add at end
fruits.unshift('kiwi'); // add at beginning
console.log(fruits); // ['kiwi', 'apple', 'banana', 'orange', 'mango']

// ➖ Remove
fruits.pop(); // removes 'mango' from end
fruits.shift(); // removes 'kiwi' from start
console.log(fruits); // ['apple', 'banana', 'orange']

// 🔁 Looping
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
