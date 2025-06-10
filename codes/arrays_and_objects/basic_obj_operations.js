const person = {
    name: 'Alice',
    age: 25,
    city: 'New York'
  };
  
  // ✅ Access values
  console.log(person.name); // Alice
  console.log(person['age']); // 25
  
  // 🆕 Add or Update
  person.email = 'alice@example.com';
  person.age = 26;
  
  // 🗑️ Delete
  delete person.city;
  
  // 🔍 Check if key exists
  console.log('email' in person); // true
  console.log(person.hasOwnProperty('city')); // false
  
  // 🔁 Loop through object
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  
  // 🧩 Object methods
  console.log(Object.keys(person)); // ['name', 'age', 'email']
  console.log(Object.values(person)); // ['Alice', 26, 'alice@example.com']
  console.log(Object.entries(person)); 
  // [['name', 'Alice'], ['age', 26], ['email', 'alice@example.com']]
  