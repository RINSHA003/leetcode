public class Solution {
    public int[] ResultArray(int[] nums) {
        List<int> arr1 = new List<int>();
        List<int> arr2 = new List<int>();

        arr1.Add(nums[0]);
        if (nums.Length > 1)
        {
            arr2.Add(nums[1]);
        }

        for (int i = 2; i < nums.Length; i++)
        {
            if (arr1[arr1.Count - 1] > (arr2.Count > 0 ? arr2[arr2.Count - 1] : int.MinValue))
            {
                arr1.Add(nums[i]);
            }
            else
            {
                arr2.Add(nums[i]);
            }
        }

        // Combine arr1 and arr2
        arr1.AddRange(arr2);

        return arr1.ToArray();
    }
}