//  COMMON TOP

// Reverse string

const  reverseString = string => [...string].reverse().join("");
console.log("Reversed -",reverseString("Simple String"));

// Factorial


const factorialNumber = num => 
    num < 0 
    ? (() => {
        throw new TypeError("NO Negative Numbers")
    })()
    : num <= 1 
    ? 1 
    : num * factorialNumber(num - 1);

console.log("Number factorial-",factorialNumber(4));

//  Conver to Array


const convertToArray = num => [...`${num}`].map(elem => parseInt(elem));
console.log("Convert to array-",convertToArray(893254));


//  Create an Array of Key-Value Pairs From an Object

const keyValuePairs = object => Object.keys(object).map(el => [el, object[el]] );
console.log("Object as array-",keyValuePairs({id:1, name:"Sarah"}));

// MaxNum of array

const arrayMaxNum = (array, number = 1) => [...array].sort((x,y) => y-x).slice(0, number);
console.log("Max num-",arrayMaxNum([3,6,8,10,1]));


//  Return the Average of Two Numbers

const averageOfTwo = (numbers) => numbers.reduce((accumulator, current) => accumulator + current ,0 ) / numbers.length;
console.log(averageOfTwo([7,8,9,10]));