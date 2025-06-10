function fibonacci(n) {
    const fibo = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
  
    return fibo;
  }
  
  console.log(fibonacci(5)); // Outputs first 5 Fibonacci numbers
  console.log(fibonacci(3)); // Outputs first 3 Fibonacci numbers
  console.log(fibonacci(7)); // Outputs first 7 Fibonacci numbers
  
  // big-O = o(n) linear time complexity