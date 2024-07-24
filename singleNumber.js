function singleNumber(arr){
    return arr.find((n)=>arr.indexOf(n)===arr.lastIndexOf(n))
}
console.log(singleNumber([2,3,2,3,3,4]))