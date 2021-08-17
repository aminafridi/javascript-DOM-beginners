// Create an array to sort
var array = [ 2,4, 3,1];

// Basic implementation (pivot is the first element of the array)
function quicksort(array) {
    if (array.length == 0) return [];

    var left = [], right = [], pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if(array[i] < pivot)
            left.push(array[i])
        else
            right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

console.log(quicksort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// console.log(array.length);
