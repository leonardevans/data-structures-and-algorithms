package com.bedubytes;

public class LinearSearch {
    //returns the index of the element in this array
    public int search(int[] arr, int x){
        for (int i = 0; i< arr.length; i++){
            if (arr[i] == x) return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = new int[]{8, 4, 67, 1, 97, 43};
        LinearSearch linearSearch = new LinearSearch();
        System.out.println(  8 +" Fount = " + linearSearch.search(arr, 8));
    }
}
