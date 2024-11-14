public class Solution {
    public string GreatestLetter(string s) {
        HashSet <char> set=new HashSet<char>(s);
        for(char i='Z';i>='A';i--){
            char upper=i;
            char lower= char.ToLower(i);
            if(set.Contains(upper) && set.Contains(lower)){
                return upper.ToString();
            }
        }
        return "";
    }
}