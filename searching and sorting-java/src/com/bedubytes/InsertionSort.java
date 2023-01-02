package com.bedubytes;

public class InsertionSort {
//    Insertion Sort
/*
is a simple sorting algorithm that works the way we sort playing cards in our hands
In insertion sort we divide the given array into two parts - sorted part and unsorted part
From unsorted part, we take the first element and place it at its correct position in sorted array. This is done by shifting all the elements which are larger than first element by one position.
It's repeated till unsorted array is not empty.
 */
    public void sort(int[] arr){
        int n = arr.length;

        for (int i =1; i <n; i++){ //unsorted
            int temp = arr[i];
            int j = i-1; //last element in sorted part
            while (j >= 0 && arr[j] > temp){
                arr[j+1] = arr[j]; //shifting larger elements to temp by 1 position
                j--;
            }

            arr[j+1] = temp;

        }
    }

    public static void main(String[] args){
        int[] arr = new int[]{5, 1, 5, 65, 10, 12, 43};
        InsertionSort insertionSort = new InsertionSort();
        System.out.println("Initial array:");
        Main.printArray(arr);

        insertionSort.sort(arr); //sort the array
        System.out.println("Sorted array:");
        Main.printArray(arr);
    }
}
