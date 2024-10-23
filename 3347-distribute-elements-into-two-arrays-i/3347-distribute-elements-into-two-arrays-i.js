/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    
    let c=[],d=[]
    c[0]=nums[0]
    d[0]=nums[1]
    for(let i=2;i<nums.length;i++)
    {
        if(c[c.length-1]>d[d.length-1])
            c.push(nums[i])
        else
            d.push(nums[i])
    }
    return[...c,...d]

};