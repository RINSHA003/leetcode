/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels=new Set(["a","e","i","o","u","A","E","I","O","U"]);
    let vowelsStack=[];
    for(let char of s){
        if(vowels.has(char)){
            vowelsStack.push(char);
        }
    }
    let result ="";
    for(let char of s){
        if(vowels.has(char)){
            result+=vowelsStack.pop();
        }
        else{
            result+=char;
        }
    }
    return result;
};