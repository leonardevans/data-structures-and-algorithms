// Learning objecives
// Explore the seven common complexity classes
// Analyze functions with multiple inputs
// Visualize the space complexity of recursive functions


// 1. Constant - O(1)
/*
this is the smallest complexity class
the number of steps does not depend on the input size
*/

// O(1) example 1
const constant1 = (n) => {
    const result = 0;
    for(let i = 0; i < 5; i++){ //iterates n times
        result += n;
    }
    return result;
};
constant1(4); //20 

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

// O(log(n)) example 2
const logarithmic2 = (n) => {
    if ( n <= 1) {
        console.log("hooray");
        return;
    }
    console.log(n);
    logarithmic2(n/2); // n/2 function calls
}
logarithmic2(30);
//30
//15
// 7.5
// 3.75
// 1.875
// done

// 3. Linear - O(n)
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


// 4. Loglinear/linear arithmetic - O(n*log(n))
/*
has linear behavior nested in log steps
bigger than O(n) but smaller than O(n^2)
*/

// O(n*log(n)) example 1
const loglinear1 = (str) => {
    console.log(str);
    if (str.length <= 1) return;
    const midIdx = Math.floor(str.length / 2); //log(n)
    loglinear1(str.slice(0, midIdx)); //n/2 iterations where n is the length of the string
};
loglinear1("abcdefghijklmnopqrstuvwxyz");
// 26, 13, 6, 3, 1 ....... log(n)
// abcdefghijklmnopqrstuvwxyz
// abcdefghijklm
// abcdef
// abc
// a
// (n/2) * log(n) = n * log(n)