function my_factorial(n) {
    let fac = 1;
    
    if (n === 1) {
        return fac;
    }
    
    fac = n * my_factorial(n - 1);
    return fac;
}

function is_even(x) {
    if (x % 2 == 0){
        return (x + " is even");
    }
    else
    return (x + " is odd");

}

function print_numbers(x) {
    if (x <= 0) {
        console.log("enter a positive number");
        return
    }
    for (let index = 0; index <= x; index++) {
        if (index == 5) {
            continue
        }
        console.log(index);
        ;
        
    }
}
function add_two(a, b) {
    return a + b
}
const sub_two= (a, b) =>{
    return a-b
}

function is_palindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

console.log("factorial of 5 = ", my_factorial(5));
console.log(is_even(3));
print_numbers(0)
console.log(add_two(2,3))
console.log(sub_two(10,2));
console.log(is_palindrome("1234321"));
console.log(is_palindrome("1234536"));




