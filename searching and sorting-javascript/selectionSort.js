/*
In selection sort, we divide the given array into two parts - sorted part and unsorted part
The algorithm sorts an array by repeatedly finding the minimum in an unsorted array and making  it part of the sorted array
From unsorted part we pick the minimum element and swap it with the leftmost element of unsorted part. After swap, the element now becomes part of sorted array.
It's repeated until the unsorted part of the array is empty
 */

function selectionSort(arr){
    const n = arr.length

    for (let i = 0; i < n-1; i++) {
        let minAtIndex = i
        for (let j = i+1; j < n; j++) {
            if(arr[j] < arr[minAtIndex]){
                minAtIndex = j
            }            
        }

        let minimum = arr[minAtIndex]
        arr[minAtIndex] = arr[i]
        arr[i] = minimum
    }

    return arr
}

let array = [5, 1, 9, 2, 10, 90, 32, 29, 54, 3]
console.log(selectionSort(array));