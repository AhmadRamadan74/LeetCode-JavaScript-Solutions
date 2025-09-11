/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let arrayAnswer = [];
    for(let i = 0; i < arr.length; i++){
        arrayAnswer[i] = fn(arr[i] , i);
    }
    return arrayAnswer;
};


