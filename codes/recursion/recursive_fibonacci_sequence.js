function recursive_fibonacci_sequence(n){
    if (n < 2) {
        return n
    } 
    return recursive_fibonacci_sequence(n-1) + recursive_fibonacci_sequence(n-2)
}

console.log(recursive_fibonacci_sequence(0)); 
console.log(recursive_fibonacci_sequence(1)); 
console.log(recursive_fibonacci_sequence(6)); 