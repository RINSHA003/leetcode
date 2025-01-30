/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result =new Set()
    for(i=0;i<words.length;i++){
        for(j=0;j<words.length;j++){
            if(i!==j && words[j].includes(words[i]))
            result.add(words[i])
        }
    }
    return Array.from(result)
};