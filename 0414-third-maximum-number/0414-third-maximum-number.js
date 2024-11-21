/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a=nums.sort((a,b)=>b-a)
    let b=Array.from(new Set(a))
        if(b.length<3){
            return b[0]
        }
        else{
            return b[2]
        }
    
};