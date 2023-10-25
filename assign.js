// Problem 1: Write a function to calculate the area of a triagle.
const calculateTriagle=(base, height)=> {
    if(base >= 0 && height>= 0){
        const area = 1/2 * (base*height);
        return area;
    } else{
        return "Input should be no negetive number!"
    }
}
const base = 10;
const height = 5;
const result = calculateTriagle(base, height)
console.log(result);
// problem 2: Write a function to convert degree to radians.

const degreeToRadiums = (degree)=>{
    return (Math.PI /180);
}
const degree = 50;
// console.log(degreeToRadiums(degree));

// Problem 5: create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
const mergeArrays = (arr1, arr2)=>{
    let newArr = arr1.concat(arr2);
    return newArr;
}
// console.log(mergeArray([1,2],[4, 5]));

// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns" This is a leap year" if its a leap year, and  "Not leap year " otherwise.

const isLeapYear = (year)=>{
    if((year % 4 === 0 && year % 100!== 0)||year % 400 === 0){
        return " This is a leap year";
    } else {
        return "Not a leap year";
    }
}
const year = 2024;
const r = isLeapYear(year);
// console.log(r);

// Problem 7: Create a function removeDuplicates that takes an arry and returns a new array with duplictes removed.

const removeDuplicates = (arr)=>{
    const removedItems = [...new Set(arr)];
    return removedItems;
}
// console.log(removeDuplicates([1, 1, 2, 2, 5]));

// Problem 8: Create a function convertToCelsius that takes a temperature in Fhrenheit and returns the equivalet temperature in celsius .

const convertToCelsius = f=>{
    const celsius = (f-32)*(5/9);
    return celsius;
}
// console.log(convertToCelsius(80));



// Problem 9: Create a function to find the maximum of five numbers .

const findMaxOfFive = (num1, num2, num3, num4, num5)=>{
let max = num1;

if( num2 > max){
    max = num2;
}              
   if(num3 > max){
    max = num3;
}
     if(num4 > max){
    max > num4;
}
     if(num5 > max){
    max = num5;
}
return max;
}
// Problem 10:  Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total numbe of characters in your String. The output will be 'even' or 'odd.' [Input: JavaScript' output: even]

const evenOdd = (items)=>{
    const length =items.length;
    if(length%2 === 0){
        return "even";
    }else{
        return "odd";
    }
}


// 1. Explain the difference between if ….else and ‘switch’ statements for conditional logic.

// Answer: The “if….else” statement checks whether the conditions evaluates to true or false. The “switch” statement checks if equality of the value in the parenthesis against the value of the case keyword evaluates to true.

// 2. What is JavaScript and what is its primary purpose in web development.

// Answer: A programming language name is JavaScript, which allows features on web pages. It’s primary purpose in web development is to provide interface between a website and users

// 3. Explain the difference  between var, let, const when declaring variable in JavaScript.

// Answer: Var variables is updated and re-declared; let variables can be updated and not re-declared; const variables can be updated and re-declared.

// 5. What is the difference between “null’” and “undefined” in JavaScript?

// Answer: “Null” means nothing but it’s assigned a value and “undefined” declared a variable but not defined.

