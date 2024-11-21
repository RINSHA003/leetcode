public class Solution {
    public int ThirdMax(int[] nums) {
   List <int> distinctSorted=nums.Distinct().OrderByDescending(x=>x).ToList();
        if(distinctSorted.Count<3){
            return distinctSorted[0];
        }else{
            return distinctSorted[2];
        }
    }
}