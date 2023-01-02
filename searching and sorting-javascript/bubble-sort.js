const bubbleSort = (intArr) => {
    const arraySize = intArr.length
    let swapped;

    for (let index = 0; index < arraySize; index++) {
        swapped = false;
        console.log(intArr);
        for (let index2 = 0; index2 < arraySize-1; index2++) {
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