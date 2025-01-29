/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalsum=nums.reduce((acc,curr)=>acc+curr,0);
    let lsum=0;
    for(i=0;i<nums.length;i++){
        rsum=totalsum-lsum-nums[i];
        if(lsum==rsum){
            return i;
        }
        lsum+=nums[i]
    }
    return -1
};