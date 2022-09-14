/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if(idx > nums.length - 1) return 1;

  return nums[idx] * product(nums, idx+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words,idx=0,longestLength=0) {

  if(idx > words.length -1) return longestLength;

  let longestLen = words[idx].length > longestLength ? words[idx].length : longestLength;

  return longest(words, idx+1, longestLen);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0) {
  if(idx > str.length-1) return "";

  return str[idx] + everyOther(str, idx+2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let leftIDX = idx;
  let rightIDX = str.length - 1 - idx;

  if(rightIDX <= leftIDX) {
    return true;
  } else if (str[leftIDX] != str[rightIDX]){
    return false;
  }

  return isPalindrome(str, idx+1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx >= arr.length) {
    return -1;
  } else if(arr[idx] === val){
    return idx;
  }

  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0) {
  if(idx >= str.length) return "";

  return str[str.length - 1 - idx] + revString(str,idx+1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,arr=[]) {
  for(let prop in obj){
    if (typeof obj[prop] === "string"){
      arr.push(obj[prop])
    } else if(typeof obj[prop] === "object"){
      gatherStrings(obj[prop],arr)
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx=0, rightIDX=arr.length-1) {
  if (rightIDX < leftIdx) {
    return -1;
  } else {
    const middleIdx = Math.floor((rightIDX + leftIdx)/2);
    if(arr[middleIdx] === val) {
      return middleIdx
    } else if(arr[middleIdx] > val) {
      return binarySearch(arr, val, leftIdx, middleIdx - 1)
    } else if(arr[middleIdx] < val) {
      return binarySearch(arr, val, middleIdx + 1, rightIDX)
    }
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
