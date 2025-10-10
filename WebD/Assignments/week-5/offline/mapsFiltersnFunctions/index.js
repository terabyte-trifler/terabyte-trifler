/*const sum = (a,b) => {
    return a+b;
}

const ans = sum(1,2);

console.log(ans); */

// given an array gimme back a new array where every number is multiplied by 5


function myMap(arr, callback) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr)); // Pass element, index, and array (just like real map)
    }

    return result;
}

const arr = [1,2,3,4,5];


function transform(i){
    return i*2;
}

const ans = myMap(arr,transform);

console.log(ans);
/* create a map function that takes 2 inputs an array, and transformaton callback/fucntion
and transforsm the array into a new pne using transformation function*/