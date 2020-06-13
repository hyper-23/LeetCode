/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0) return "";
    var str = strs[0].split("");
    for(var i=1; i<strs.length; i++){
        var tmp = [];
        strX = strs[i].split("");
        for (var j=0; j<strX.length; j++){
            if(str[j] == strX[j]){
                tmp.push(str[j]);
                continue;
            }
            break;
        }
        str = tmp;
        if(str.length==0) break;
    }
    return str.join("");
};
console.log(longestCommonPrefix(["dog","racecar","car"]))