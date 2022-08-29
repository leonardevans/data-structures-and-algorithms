package com.bedubytes;

public class MergeSort {
/*
Merge So rt is a divide and conquer algorithm
Divide - In this step the algorithm takes middle point of array and divided the array into two halves.
The algorithm is carried out recursively for half arrays, until there are no more half arrays to divide.
Conquer - In this step starting from the bottom, we sort and merge the divided arrays and get the sorted array
*/

    public static void main(String[] args) {
        int[] arr = new int[]{8, 4, 67, 1, 97, 43};
        MergeSort mergeSort = new MergeSort();
        System.out.println("Initial array:");
        Main.printArray(arr);

        mergeSort.sort(arr, new int[arr.length], 0, arr.length -1);

        System.out.println("Sorted array:");
        Main.printArray(arr);
    }

    public void sort(int[] arr, int[] temp, int low, int high){
        if (low < high){ //base
            int mid = low + (high - low)/2; //overflow condition
            sort(arr, temp, low, mid);
            sort(arr, temp, mid + 1, high);
            merge(arr, temp, low, mid, high);
        }
    }

    public void merge(int[] arr, int[] temp, int low, int mid, int high){
        for (int i= low; i<= high;  i++){
            temp[i] = arr[i];
        }

        int i = low, j= mid +1, k = low;
//        i will traverse left sorted subarray, j will traverse right sorted subarray, k will merge both arrays into original array(arr)

        while(i <= mid && j <= high){
            if (temp[i] <= temp[j]){
                arr[k] = temp[i];
                i++;
            }else{
                arr[k] = temp[j];
                j++;
            }
            k++;
        }

        //if the left array not is exhausted
        while (i <= mid ){
            arr[k] = temp[i];
            k++;
            i++;
        }

    }
}
