// {5, 6, 7, 8, 9, 10, 1, 2, 3};
// key = 3

function search(arr, low, high, key) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) return mid;

  /* If arr[l...mid] is sorted */
  if (arr[low] <= arr[mid]) {
    /* As this subarray is sorted, we can quickly
    check if key lies in half or other half */
    if (key >= arr[low] && key <= arr[mid])
      return search(arr, low, mid - 1, key);

    /*If key not lies in first half subarray,
    Divide other half  into two subarrays,
    such that we can quickly check if key lies
    in other half */
    return search(arr, mid + 1, high, key);
  }
  /* If arr[l..mid] first subarray is not sorted,
  then arr[mid... h]
  must be sorted subarray */
  if (key >= arr[mid] && key <= arr[high])
    return search(arr, mid + 1, high, key);

  return search(arr, low, mid - 1, key);
}

let arr = new Array(5, 6, 7, 8, 9, 10, 1, 2, 3);
let low = 0;
let high = arr.length - 1;
let key = 88;
const index = search(arr, low, high, key);
console.log(index);
