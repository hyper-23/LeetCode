/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y = String(x).split("").reverse().join("");
    if(x==Number(y)) return true
    return false
};
console.log(isPalindrome(121))