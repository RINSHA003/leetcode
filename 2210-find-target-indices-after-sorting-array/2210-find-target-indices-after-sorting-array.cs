public class Solution {
    public IList<int> TargetIndices(int[] nums, int target) {
       List<int> indices=new List<int>();
       Array.Sort(nums);
       for(int i=0;i<nums.Length;i++){
        if(nums[i]==target){
            indices.Add(i);
        }
       }
       return indices;
    }
}