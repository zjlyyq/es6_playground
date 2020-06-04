
// function bar() {
//     console.log(myName)
// }
// function foo() {
//     var myName = "极客邦"
//     bar()
// }
// var myName = "极客时间"
// foo()


// function bar() {
//     var myName = "极客世界"
//     let test1 = 100
//     if (1) {
//         let myName = "Chrome浏览器"
//         console.log(test)  //1
//     }
// }
// function foo() {
//     var myName = "极客邦"
//     let test = 2
//     {
//         let test = 3
//         bar()
//     }
// }
// var myName = "极客时间"
// let myAge = 10
// let test = 1
// foo()


// function foo() {
//     var myName = "极客时间"
//     let test1 = 1
//     const test2 = 2
//     var innerBar = {
//         getName:function(){
//             console.log(test1)
//             return myName
//         },
//         setName:function(newName){
//             myName = newName
//         }
//     }
//     return innerBar
// }
// var bar = foo()
// bar.setName("极客邦")
// bar.getName()  //1
// console.log(bar.getName())  //1 极客邦


var bar = {
    myName:"time.geekbang.com",
    printName: function () {
        console.log(myName)
    }    
}
function foo() {
    let myName = "极客时间"
    return bar.printName
}
let myName = "极客邦"
let _printName = foo()
_printName()  // 极客时间 x  -->  极客邦 yes
bar.printName()  // 极客邦

/**
 * 
 */