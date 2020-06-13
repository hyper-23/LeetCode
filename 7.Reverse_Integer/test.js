/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var flag = true;
    var list = String(x).split("")
    if(x<0){
        flag=false;
        list.shift();
    }
    list.sort((a,b) => a<b);
    var result = Number(list.join(""))
    if(flag == false) result = result*-1
    return result;
};

console.log(reverse(123))