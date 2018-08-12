// //take the The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

// Following example explains the above steps:

// arr[] = 64 25 12 22 11

// // Find the minimum element in arr[0...4]
// // and place it at beginning
// 11 25 12 22 64

// // Find the minimum element in arr[1...4]
// // and place it at beginning of arr[1...4]
// 11 12 25 22 64

// // Find the minimum element in arr[2...4]
// // and place it at beginning of arr[2...4]
// 11 12 22 25 64

// // Find the minimum element in arr[3...4]
// // and place it at beginning of arr[3...4]
// 11 12 22 25 64 
let arr  =[11,5,8,9,1,6,3,7,15,12,4] ;
arr= [6,1,5,3];

function selectionSort(arr){

    for(let i=0;i<arr.length;i++){
        let smallestIndex = findSmallest(arr.slice(i,arr.length))
        //swap the i and smallestIndex element
        let temp = arr[arr.indexOf(smallestIndex)];
        arr[arr.indexOf(smallestIndex)]= arr[i];
        arr[i]=temp;
        
        
    }
    
    console.log(arr);
}
findSmallest=(arr)=>{
    let smallestIndex= 0;
    let smallest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<smallest){ smallest= arr[i];
        smallestIndex = i};
    }
return smallest;
    
}

selectionSort(arr);