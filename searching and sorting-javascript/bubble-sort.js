// Bubble Sort
/*
- It is also called as sinking sort
- While applying this sorting algorithm on unsorted array, the largest elements tend to sink at the end of the array
- It repeatedly compares a pair of adjacent elements and swap them if they are in wrong order
*/

const bubbleSort = (intArr) => {
    const arraySize = intArr.length
    let swapped;

    for (let index = 0; index < arraySize; index++) {
        swapped = false;
        console.log(intArr);
        for (let index2 = 0; index2 < arraySize-1-index; index2++) {
            if(intArr[index2] > intArr[index2+1]){
                let temp = intArr[index2]
                intArr[index2] = intArr[index2+1]
                intArr[index2+1] = temp
                swapped = true
            }
            
        }
        if (!swapped) {
            break
        }
    }
    return intArr
}

let array = [5, 1, 2, 9, 10]
console.log(bubbleSort(array));