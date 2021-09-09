const strcomparebackspace = function(str1,str2){
    let p1 = str1.length-1, p2 = str2.length-1;
    while(p1 >= 0 || p2 >=0){
        if(str1[p1]==="#" || str2[p2]==="#"){
            if(str1[p1]==="#"){
                let backspace = 2;
                while(backspace > 0){
                    p1--;
                    backspace--;
                    if(str1[p1]==="#"){
                        backspace+=2;
                    }
                }
            }
            if(str2[p2]==="#"){
                let backspace = 2;
                while(backspace > 0){
                    p2--;
                    backspace--;
                    if(str2[p2]==="#"){
                        backspace+=2;
                    }
                }
            }
        }
        else{
            if(str1[p1]!==str2[p2]) return false;
            else{
                p1--;
                p2--;
            }
        }
    }
    return true;
}
console.log("skh");
console.log(strcomparebackspace("abc#d","abzz##d"));