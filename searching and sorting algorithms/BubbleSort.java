// Bubble Sort
/*
- It is also called as sinking sort
- While applying this sorting algorithm on unsorted array, the largest elements tend to sink at the end of the array
- It repeatedly compares pair of adjacent elements and swap them if they are in wrong order
*/

public class BubbleSort{
    public void printArray(int[] arr){
        int n = arr.length;
        for(int i = 0; i < n; i++){
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public void sort(int[] arr ){
        int n = arr.length;
        boolean isSwapped;

        for(int i = 0; i < n; i++){
            isSwapped = false;
            for(int j = 0; j < n-1-i; j++){
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
            if(!isSwapped){
                break;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{5, 1, 2, 9, 10};
        BubbleSort bubbleSort = new BubbleSort();
        bubbleSort.printArray(arr);
        bubbleSort.sort(arr);
        bubbleSort.printArray(arr);
    }
}