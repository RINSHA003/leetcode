/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let maxLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let z = 0;
        
        // Check if nums[i] is a valid start for the subarray
        if (nums[i] % 2 === 0 && nums[i] <= threshold) {
            count = 1; // Start counting with this element
            z = 1;     // Next we expect an odd number

            for (let j = i + 1; j < nums.length; j++) {
                if (z === 1 && nums[j] % 2 !== 0 && nums[j] <= threshold) {
                    count++;
                    z = 0; // Next we expect an even number
                } else if (z === 0 && nums[j] % 2 === 0 && nums[j] <= threshold) {
                    count++;
                    z = 1; // Next we expect an odd number
                } else {
                    break;
                }
            }
            
            // Update maxLength if the current count is greater
            maxLength = Math.max(maxLength, count);
        }
    }

    return maxLength;
};
