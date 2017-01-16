// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your  jump length at that position.

// Determine if you are able to reach the last index.

// For example:
var a = [2,3,1,1,4]; // return true.

var b = [3,2,1,0,4]; // return false.

function canGetToEnd(arr) {
  var end = arr.length - 1;

  var next = 0;
  while(next <= end) {
    if (next === end) return true;
    if (arr[next] === 0) return false;
    next += arr[next];
  }
  return false;
}
