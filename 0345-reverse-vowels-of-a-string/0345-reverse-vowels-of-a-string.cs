public class Solution {
    public string ReverseVowels(string s) {
        int l=0;
        int r=s.Length-1;
        HashSet<char> dict=new HashSet<char>{'A','E','I','O','U','a','e','i','o','u'};
        char[] arr=s.ToCharArray();
        while(l<r){
            if(!dict.Contains(s[l])){
                l+=1;
            }
            if(!dict.Contains(s[r])){
                r-=1;
            }
            if(dict.Contains(s[l]) && dict.Contains(s[r])){
                char temp=arr[l];
                arr[l]=arr[r];
                arr[r]=temp;
                 l++;
                 r--;
            }
        }

        return new String(arr);
    }
}