function linear_search(arr, target){

    for(let i=0; i<arr.length; i++){
        if (target===arr[i]){
            return i
        }
    }
    return -1
}

console.log(linear_search([-5,2,10,4,6],10));
console.log(linear_search([-5,2,10,4,6],6));
console.log(linear_search([-5,2,10,4,6],20));