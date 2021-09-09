const rainwater = function(arr){
    let p1 = 0, p2 = arr.length -1, max = 0;
    while(p1<p2){
        const height = Math.min(arr[p1],arr[p2]);
        const width = p2 - p1;
        max = Math.max(max,height*width);
        if(arr[p1]<= arr[p2]) p1++;
        else p2--;
    }
    return max;

}

//console.log(rainwater([4,8,1,2,3,9]));


const totalwater = function(arr){
    let p = 0, total = 0;

    while(p< arr.length){

        let l = p, maxL = 0, r = p, maxR = 0;
        while(l>=0){
            if (maxL < arr[l]) maxL = arr[l];
            l--;
        }
        while(r<arr.length){
            if(maxR < arr[r]) maxR = arr[r];
            r++;
        }
        total+=Math.max((Math.min(maxL,maxR)-arr[p]),0);
        p++;
       
    }
    return total;
}
console.log(totalwater([0,1,0,2,1,0,3,1,0,1,2]));

const totalwater_opt = function(arr){
    let lp =0, rp = arr.length-1, maxl = 0, maxr = 0, total = 0;
    while(lp<rp){
        if(arr[lp] <= arr[rp]){
            if(arr[lp]>=maxl) maxl = arr[lp];
            else total+=maxl-arr[lp];
            lp++;
        }
        else{
            if(arr[rp]>=maxr) maxr = arr[rp];
            else total+=maxr-arr[rp];
            rp--;
        }

    }
    return total;
}
console.log(totalwater_opt([0,1,0,2,1,0,3,1,0,1,2]));
