const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon']
const array = fruits.map(fruit => {
    if(fruit === ' '){
        return 'empty string'
    }else{
        return fruit
    }
})
console.log(array);


// SPREAD OPERATOR
const hobbies = ['Sports', 'Cooking', 'Programming']
const copiedarray = [...hobbies]

console.log(copiedarray);


//REST OPERATOR
const array1 = (...args) => {
    return args;
}

console.log(array(1,2,3,4,5,6,7,8,9,0));