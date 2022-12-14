
// To use binary search the array must be sorted first to be able to apply the binary search 
// Scenario 1: Searching for a target that exists
// Target = 7
//  0  1  2  3  4   5   6   7   8   index
// [2, 7, 8, 9, 10, 13, 17, 19, 21]
// left         mid             right
//             (0+8)/2=4
/*
Step 1: Track left and right indices
Step 2: Find the mid
Step 3: Compare the target to the mid
Step 4: Repeat steps 1-3
*/


// Scenario 2: Searching for a target that does not exists
/*
Target = 15
index   0  1  2  3  4   5   6   7   8
array  [2, 7, 8, 9, 10, 13, 17, 19, 21]
        left        mid             right

mid index = 8/2=4
mid = 10 < Target = 15 so we eliminate everything on left side

repeat the steps on the right side
mid index = (8 + 5)/2 = 6.5 = 6
mid = 17 > Target = 15
stop searching when left >= right

*/


// Iterative implementation
let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];
console.log('array:', nums);
//this method returns the index of the target
function binarySearch(array, target) {
    // set left and right markers
    let left = 0, right = array.length-1;
    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (target === array[mid]){
            return mid
        }
        else if (target < array[mid]) {
            right = mid -1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}
console.log('index of 7 is: ', binarySearch(nums, 7)); //returns 1
console.log('index of 15 is: ', binarySearch(nums, 15)); //returns false
console.log('index of 19 is: ', binarySearch(nums, 19)); //returns 7
// Time complexity: O(log(n)), Space complexity: O(1) where n is the input array length

// Recursive implementation
console.log(' Recursive implementation');
function binarySearch1(array, target){
    return binarySearchHelper(array, target, 0, array.length-1);
}

function binarySearchHelper(array, target, left, right) {
    if (left > right){
        return false;
    }
    
    let mid = Math.floor((left + right)/2);
    if (target === array[mid]){
        return mid;
    }
    else if (target < array[mid]) {
        return binarySearchHelper(array, target, left, mid -1 );
    }else{
        return binarySearchHelper(array, target, mid +1, right );
    }
}
console.log('index of 7 is: ', binarySearch1(nums, 7)); //returns 1
console.log('index of 15 is: ', binarySearch1(nums, 15)); //returns false
console.log('index of 19 is: ', binarySearch1(nums, 19)); //returns 7
// Time complexity: O(log(n)), Space complexity: O(log(n)) where n is the input array length

// Conlusion
/*
The iterative approach is better in terms of space complexity
*/