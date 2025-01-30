/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    count=0;
    for(i=0;i<patterns.length;i++){
        if(word.includes(patterns[i]))
        count ++
    }
    return count;
};