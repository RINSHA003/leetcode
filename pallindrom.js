function pallindrom(str){
    str=str.toString();
    let rev=str.split("").reverse().join("")
    return str===rev
}
console.log(pallindrom(-121))