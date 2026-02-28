// this one is my solution for the problem 
// notice how it can only work for small numbers
// poor space complexity too  

function isPowerOfTwo(n){
    for (let i=0; i< 10; i++){
        if(2**i ===n ){
            return true
        }
    }
    return false
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

// better solution has seen in the video 

function isPowerOfTwoo(n){
    if (n < 1){
        return false 
    }

    while (n > 1){
        if (n % 2 !== 0){
            return false
        }
        n= n / 2
    }
    return true
}

console.log(isPowerOfTwoo(1))
console.log(isPowerOfTwoo(2))
console.log(isPowerOfTwoo(5))

// bitwise solution 
function isPowerOfTwoBitwise(n){
    if (n < 1){
        return false 
    }
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))