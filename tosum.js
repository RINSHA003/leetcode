function tosum(num,target){
    a=[]
    for(let i=0;i<num.length;i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]===target){
                a.push([i,j])
            }
        }
    }
    return a
}
console.log(tosum([2,7,11,15],9))