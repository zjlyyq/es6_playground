// showName();
// var showName = function() {
//     console.log(2);
// }
// function showName() {
//     console.log(1);
// }
// showName();
// --------------分割线-----------------
// showName()
// console.log(myname)
// var myname = '极客时间'
// function showName() {
//     console.log('函数showName被执行');
// }
// --------------分割线-----------------

// function varTest() {
//     var x = 1;
//     if (true) {
//       let x = 2;  // 同样的变量!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
// }
// varTest();

// --------------分割线-----------------

// function foo(){
//     var a = 1
//     let b = 2
//     {
//       let b = 3
//       var c = 4
//       let d = 5
//       console.log(a)  //1
//       console.log(b)  //3
//     }
//     console.log(b)  //2
//     console.log(c) // 4
//     console.log(d)  //error
// }   
// foo()

// --------------暂时性死区-----------------

// let myname= '极客时间'
// {
//     console.log(myname) 
//     let myname= '极客邦'
// }


// --------------let是否支持变量提升-----------------

// console.log(myname)
// let myname = "zjl"


function foo(){
    console.log(b);
    var a = 1
    let b = 2
    {
      let b = 3
      var c = 4
      let d = 5
      console.log(a)
      console.log(b)
    }
    console.log(b) 
    console.log(c)
    console.log(d)
}   
foo()


// let myname= '极客时间'
// {   
//     myname = 'zjl'
//     console.log(myname) 
//     var myname= '极客邦'
// }