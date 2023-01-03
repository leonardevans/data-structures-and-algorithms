
        // Learning objecives
// Explore the seven common complexity classes
// Analyze functions with multiple inputs
// Visualize the space complexity of recursive functions

// 1. Constant - O(1)
/*
this is the smallest complexity class
the number of steps does not depend on the input size
*/
console.log("1. Constant - O(1) example 1");
// O(1) example 1
const constant1 = (n) => {
    let result = 0;
    for(let i = 0; i < 5; i++){ //iterates n times
        result += n;
    }
    return result;
};
constant1(4); //20 

console.log("1. Constant - O(1) example 2");
// O(1) example 2
// arithmetic operations are O(1)
const constant2 = (array) => {
    return array[0] * array[array.length - 1];
    //array[0] takes constant time
    //array.length takes constant time
};
constant2([3, 5, 1, 4, 7]); //21





//2. Logarithmic - O(log(n))
/*
the number of steps can be expressed as a logarithm on the input size
*/

// Logarithms explained
/*
A log is the opposite of an exponent
An exponent is a repeated multiplication, a log is a repeated division
2^5=2*2*2*2*2=32  then log[2](32)=5
*/

console.log("2. Logarithmic - O(log(n)) example 1");
// O(log(n)) example 1
/*

*/
const logarithmic1 = (n) => {
    while ( n > 1) { //iterates n/2 times
        console.log(n);
        n /= 2;
    }
    console.log("done");
};
logarithmic1(32);
//32
//16
// 8
// 4
// 2
//done
/*
log[2](32)
32 was our input, we can omit the hidden base 2
n=32 hence O(log(n))
*/


console.log("2. Logarithmic - O(log(n)) example 2");
// O(log(n)) example 2
const logarithmic2 = (n) => {
    if ( n <= 1) {
        console.log("done");
        return;
    }
    console.log(n);
    logarithmic2(n/2); // n/2 function calls
}
logarithmic2(10);
//30
//15
// 7.5
// 3.75
// 1.875
// done

// 3. Linear - O(n)
console.log("3. Linear - O(n) example 1");
// O(n) example 1
let linear1 = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};
linear1(["soho", "nomad", "tribeca", "dumbo", "les"]);
// soho
// nomad
// tribeca
// dumbo
// les

console.log("3. Linear - O(n) example 2");
// O(n) example 2
let linear2 = (n) => {
    if(n === 0) return;
    console.log(n);
    linear2(n-1); //n function calls
}
linear2(5);
// 5
// 4
// 3
// 2
// 1


// 4. Loglinear/linear logarithmic - O(n*log(n))
/*
has linear behavior nested in log steps
bigger than O(n) but smaller than O(n^2)
*/

console.log('4. Loglinear/linear logarithmic - O(n*log(n)) example 1');
// O(n*log(n)) example 1
const loglinear1 = (str) => {
    console.log(str);
    if (str.length <= 1) return;
    const midIdx = Math.floor(str.length / 2);
    loglinear1(str.slice(0, midIdx)); //n/2 iterations for the function where n is the length of the string, log(n) for slicing
};
loglinear1("abcdefghijklmnopqrstuvwxyz");
// 26, 13, 6, 3, 1 ....... log(n)
// abcdefghijklmnopqrstuvwxyz
// abcdefghijklm
// abcdef
// abc
// a
// (n/2) * log(n) = n * log(n)

console.log('4. Loglinear/linear logarithmic - O(n*log(n)) example 2');
// O(n*log(n)) example 2
const loglinear2 = (array) => {
    let str = "";
    for (let i = 0; i < array.length; i++) { //n iterations 
        str += array[i];
    }
    console.log(str);
    console.log("---------"); 

    if (array.length <= 1) return;

    const midIdx = Math.floor(array.length / 2);
    const left = array.slice(0, midIdx);
    const right = array.slice(midIdx);
    loglinear2(left);
    loglinear2(right);
};
loglinear2(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']);
// abcdefgh
// abcd
// ab
// a
// b
// cd
// c
// d
// efgh
// ef
// e
// f
// gh
// g
// h

/*
n       n*log[2](n)     n*n
1       0               1
2       2               4
4       8               16
8       24              64
16      64              256
1024    10240           1048576
*/


// 5. Polynomial - O(n^c)
/*
n is the size of input
c is some constant
includes O(n^2) quadratic, O(n^3) cubic, etc.
*/

console.log('5. Polynomial - O(n^c) example 1'); 
// O(n^c) example 1
const polynomial1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] + "/" + array[j]);
        }
    }
}
polynomial1(["paella", "risotto", "pilaf"]);
// paella/paella
// paella/risotto
// paella/pilaf
// risotto/paella
// risotto/risotto
// risotto/pilaf
// pilaf/paella
// pilaf/risotto
// pilaf/pilaf

console.log('5. Polynomial - O(n^c) example 2'); 
// O(n^c) example 2
const polynomial2 = (n) => {
    for (let q = 0; q < n; q++) {
        for (let r = 0; r < n; r++) {
            for (let s = 0; s < n; s++) {
                console.log(q, r, s);
                
            }
        }
    }
}
polynomial2(2);

console.log('5. Polynomial - O(n^c) example 3'); 
// O(n^c) example 3
const polynomial3 = (str) => {
    if(str.length === 0) return;

    const firstChar = str[0];
    const rest = str.slice(1); //n
    console.log(firstChar);
    polynomial3(rest); //n
}
polynomial3('coderbyte');
// O(n*n) O(n^2)


// 6. Exponential - O(c^n)
/*
n is the size of input
c is some constant
includes O(2^n) , O(3^n) , etc.
*/

console.log('6. Exponential - O(c^n) example 1'); 
// O(c^n) example 1
const exponential1 = (n) => {
    if (n === 1) return;
    exponential1(n-1); // 1
    exponential1(n-1); // 1
}
exponential1(4);
// this method calls itself 2 time and since we substract 1 in every method call, the nodes double on every method call
// O(2^n) where n is the input number


console.log('6. Exponential - O(c^n) example 2'); 
// O(c^n) example 2
const exponential2 = (n) => {
    if (n === 1) return;
    exponential2(n-1); // 1
    exponential2(n-1); // 1
    exponential2(n-1); // 1
}
exponential2(4);
// this method calls itself 3 time and since we substract 1 in every method call, the nodes triple on every method call
// O(3^n) where n is the input number

console.log('6. Exponential - O(c^n) example 3'); 
// O(c^n) example 3
const exponential3 = (n) => {
    if (n <= 1) return;
    exponential3(n-2); // 1
    exponential3(n-2); // 1
}
exponential3(8);
// O(2^n/2) = O(2^n) where n is the input number



// 7. Factorial - O(n!)
/*
factorial, in maths, is the product of all positive integers less than or equal to a given positive integer
n! = (n)(n-1)(n-2)(n-3)...(2)(1)
4! = 4*3*2*1 = 24
*/

console.log('7. Factorial - O(n!) example 1'); 
const factorial1 = (n) => {
    if (n == 1) return;
    for (let i = 0; i < n; i++) {
        factorial1(n-1);
    }
};
factorial1(4);


/*
Complexity Hierarchy
Big O           Class
----------------------
O(1)            constant
O(log(n))       logarithmc
O(n)            linear
O(n*log(n))     loglinear/linear logarithmic
O(n^c)          polynomial
O(c^n)          exponential
O(n!)           factorial
*/ 



// Analyzing Multi-argument Functions
const multi = (m, n) => {
    for(let i = 0; i < m; i++){ //............m
        console.log("hi");
    }
    for (let j = 0; j < n; j++){ //-----------n
        console.log('bye');
    }
};
multi(3, 2);
// O(m+n) time complexity where m and n are input numbers

const crossPairs = (array1, array2) => {
    for (let i = 0; i < array1.length; i++) { // loop 1 m time
        for (let j = 0; j < array2.length; j++) { // loop 2 n times
            console.log(array1[i], array2[j]);
        }
    }
};
let colors = ['yellow', 'teal', 'navy', 'white'];
let clothes = ['shirt', 'jeans', 'skirt'];
crossPairs(colors, clothes);
// O(m*n) time complexity where m and n are input numbers

const multi2 = (str1, str2) => {
    if(str1.length > str2.length){
        for (let i = 0; i < str1.length; i++) {
            console.log(str1[i]);
            
        }
    }else{
        for (let j = 0; j < str2.length; j++) {
            console.log(str2[j]);
            
        }
    }
}
multi2('swim', 'run');
multi2('coat', 'jacket');
// time complexity is O(max(m, n)), where m and n are the string lengths
// time complexity is O(n)), where n is the length of the longer string


// Analyzing Stack Space For Recursion
/*
The space required on the call stack is the maximum stack depth
*/
const recursive = (n) => {
    if (n === 0) return;
    recursive(n -1); //----------1
    recursive(n -1); //----------1
};
recursive(4);
// time complexity is O(2^n)
// space complexity is O(n)