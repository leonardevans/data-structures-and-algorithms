//    Insertion Sort
/*
is a simple sorting algorithm that works the way we sort playing cards in our hands
In insertion sort we divide the given array into two parts - sorted part and unsorted part
From unsorted part, we take the first element and place it at its correct position in sorted array. This is done by shifting all the elements which are larger than first element by one position.
It's repeated till unsorted array is not empty.
 */

function insertionSort (array){
    for(let i = 1; i < array.length; i++){
        let temp = array[i]
        let j = i-1

        while (j >= 0 &&  array[j] > temp) {
            array[i] = array[j]
            array[j] = temp
        }
    }

    return array
}

let array = [5, 1, 2, 9, 10]
console.log(insertionSort(array));