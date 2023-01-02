// What is bubble sort algorithm
/*
The bubble sort algorithm is the fundamental and the simplest form of an algorithm

The bubble sort algorithm moves through a sequence of data and rearranges them into ascending or descending order one number at a time  

bubble sort algorithm is also known us sinking sort algorithm
*/

// How does the bubble sort algorithm work
/*
Bubble sort algorithm does not search an array as a whole. It works by comparing two adjacent pairs of elements in an array

If the elements are not in the correct order, they are swapped so that the largest of two moves up. This process continues until the most significant elements bubble up to the highest position

After this occurs, the search for the next most significant object starts, and the swapping continues until the whole array is in the correct position
*/

// Variations of Bubble sort algorithm
/*
1. Odd-even sort is a parallel version of bubble sort algorithm for the message passing system

2. Cocktail Shaker sort is abi-directional bubble sort that first goes from beginning to end and then ends to the beginning

*/

// Complexity of Bubble Sort algorithm
/*
Best case performance = O(n)
Average case performance = O(n^2)
Worst case performance = O(n^2)
Space complexity = O(1)

where n is the number of items being sorted
*/

// Best case performance = O(n)
/*
The best case of a bubble sort algorithm is O(n), which occurs when all the data elements in an array are already sorted

Example
[10, 20, 30, 40, 50]
*/

// Worst and average case performance = O(n^2)
/*
The worst and average case of a bubble sort algorithm is O(n^2), which occurs when all the data elements in an array are reversely sorted

Example
[10, 20, 30, 40, 50]
*/

// Space Complexity O(1)
/*
The space complexity of the bubble sort algorithm is O(1) because only one additional variable is required to implement bubble sort, i.e temp variable
*/

// Applications of Bubble sort algorithm
/*
1. Bubble sort is a sorting algorithm that is used to sort the elements in a specific order

2. Bubble sort algorithm uses less storage

3. The bubble sort algorithm is used to sort the people based on their height in a line

4. Bubble sort algorithm is used to create a stack, pile up the elements based on their height
*/

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int arr[50], num, a, b, temp;

    printf("Enter the number of elements in the array\n");
    scanf("%d", &num);

    //num is the length of the array

    printf("Enter %d elements in the array\n", num);

    for (a = 0; a < num; a++)
        scanf("%d", &arr[a]);

    for ( a = 0; a < num; a++) // first for loop for the number of rotation
    {
        printf("First loop: %d \n", a);
        for ( b = 0; b < num -a -1; b++) // second loop for the number of pass
        {
            printf("second loop: %d \n", b);
            if (arr[b] > arr[b+1]) // if the current element is greater that its next consecutive element
            {
                temp = arr[b];
                arr[b] = arr[b+1];
                arr[b+1] = temp;
            }
            
        }
        
    }

    printf("Sorted array is \n");
    for ( a = 0; a < num; a++)
    {
        printf("%d\n", arr[a]);
    }
    
    return 0;
}