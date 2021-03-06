// //
// Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

// Example:
// First Pass:
// ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
// ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
// ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

// Second Pass:
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
// ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
// Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

// Third Pass:
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

let arr  =[11,5,8,9,1,6,3,7,15,12,4] ;
arr= [1,2,3];

function bubblesort(arr){
    let swap = true;
    while(swap)
    {
        swap =false;
        for(let i=0;i<arr.length-1;i++){
        let a= arr[i];
        let b= arr[i+1];
        if(a>b){
            //swap it
            swap =true;
            let c= arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=c;
        }
        let ele = '';
        arr.forEach(element => {
            ele=ele+element;
        });
        console.log(ele);
    }}
    
}
bubblesort(arr);