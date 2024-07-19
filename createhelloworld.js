// const  f = createhelloworld(){
//     return 'hello world';
// }
// console.log(f)

// const f=()=>'hello world';
// console.log(f())

function createHelloWorld(){
    const greeting='hello world';
    return function(){
        return greeting;
    };
}
const hellofunction=createHelloWorld()
console.log(hellofunction())