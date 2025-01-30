/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sortedS=s.split("").sort().join("");
    let sortedt=t.split("").sort().join("");
    return sortedS===sortedt
};