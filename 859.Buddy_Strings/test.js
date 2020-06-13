/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

    var flag = false;

    var Alist=A.split("")
    var Blist=B.split("")

    var index = 0
    var chcnt = 0

    if(Alist.length!=Blist.length) return false;

    if(A==B){
        for(var i=0;i<Alist.length;i++){
            targetStr = Alist[i]
            var cnt = ( B.match( new RegExp( targetStr, "g" ) ) || [] ).length ;
            if(cnt>1){
                return true
            }
        }
        return false
    }

    for(var i=0; i<Alist.length; i++){
        index = Blist.indexOf(Alist[i])
        if(index!=-1){
            Blist[index]=null;
            if(i!=index){
                chcnt++
            }
        }else{
            return false
        }
    }

    if(chcnt<=2)flag = true;

    return flag;
    
};

console.log(buddyStrings("abcaa","abcbb"))