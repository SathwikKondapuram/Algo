const anagram_check = function(str1,str2){
    const frequency = {};
    for(let i of str1){
        frequency[i] = (frequency[i] || 0) + 1;
    }
    
    for(let i of str2){
        if(!(i in frequency)) return false;
        else{
            frequency[i] -= 1;
            if(frequency[i] === 0) delete(frequency[i]);
        }
        
    }
    
    
    return true;

}
console.log(anagram_check("",""));
