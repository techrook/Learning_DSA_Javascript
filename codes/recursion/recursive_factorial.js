function recursive_factorial(n) {
    if (n ===0) {
        return 1
    }
    return n * recursive_factorial(n-1);
}

console.log(recursive_factorial(0));
console.log(recursive_factorial(4));
console.log(recursive_factorial(5));