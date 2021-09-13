var threeSum = function(nums) {
    let res = {};
    let dups = new Set();
    let seen = {};
    for(let i =0; i< nums.length; i++){
        if(dups.has(nums[i]) === false){
            dups.add(nums[i]);
            for(let j = i+1; j < nums.length; j++){
                comp = -nums[i]-nums[j];
                if(seen[comp] === i){
                    let s = [nums[i],nums[j],comp].sort(function(x,y){return x - y});
                    if(res[s] !== s)
                       res[s]=s;
                }
                seen[nums[j]] = i;
            }
        }
    }
    let l = Object.values(res);
    return l;
    
    
    
};