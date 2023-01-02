package com.bedubytes;

public class SelectionSort {
/*
In selection sort, we divide the given array into two parts - sorted part and unsorted part
The algorithm sorts an array by repeatedly finding the minimum in an unsorted array and making  it part of the sorted array
From unsorted part we pick the minimum element and swap it with the leftmost element of unsorted part. After swap, the element now becomes part of sorted array.
It's repeated until the unsorted part of the array is empty
 */
    public void sort(int[] arr){
        int n = arr.length;

        for (int i =0; i <n-1; i++){ //unsorted
            int minAtIndex = i;
            for (int j = i+1; j < n; j++ ){
                if (arr[j] < arr[minAtIndex]){
                    minAtIndex = j;
                }
            }

            int min = arr[minAtIndex];
            arr[minAtIndex] = arr[i];
            arr[i] = min;
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{5, 1, 5, 65, 10, 12, 43};
        SelectionSort selectionSort = new SelectionSort();
        System.out.println("Initial array:");
        Main.printArray(arr);

        selectionSort.sort(arr); //sort the array
        System.out.println("Sorted array:");
        Main.printArray(arr);
    }
}
