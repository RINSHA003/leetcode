public class Solution {
    public bool RotateString(string s, string goal) {
        if(s.Length != goal.Length){
            return false;
        }
        var doubled=s+s;
        return doubled.Contains(goal);
    }
}