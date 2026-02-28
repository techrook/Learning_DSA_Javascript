function isPrime(n){
    let limit = Math.sqrt(n);
    if (n<2){
        return false
    }
    for(let i=2; i<limit; i++){
        if (n%i === 0){
            return false
        }
    }
    return true
}

console.log(isPrime(2))   // true
console.log(isPrime(7))   // true
console.log(isPrime(6))   // false
console.log(isPrime(1))   // false