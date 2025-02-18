function my_lagest(arr) {
    max = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] >= max){
            max = arr[index]
        }
    }
    return max;
}

function even_numbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);

    return evenNumbers;
}

function power_of_2(arr) {
    let doubled = arr.map(num => num ** 2);
    return doubled
}

arr = [9,12,3,4,5,3]

console.log(my_lagest(arr));
console.log(even_numbers(arr));
console.log(power_of_2(arr));

console.log(arr)

