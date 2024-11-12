public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        List<int> arr = new List<int>();
        
        for (int i = 0; i < nums.Length; i++) {
            for (int j = i + 1; j < nums.Length; j++) {
                if (nums[i] + nums[j] == target) {
                    arr.Add(i);
                    arr.Add(j);
                    return arr.ToArray();  
                }
            }
        }
        
        // Return an empty array if no two numbers sum up to the target
        return new int[0];
    }
}
