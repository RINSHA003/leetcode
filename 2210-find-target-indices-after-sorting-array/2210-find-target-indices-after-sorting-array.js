/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    var b=[];
    var a= nums.sort((a,b)=>a-b);
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            b.push(i)
        }
    }
    return b;
};