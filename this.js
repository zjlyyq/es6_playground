
// let bar = {
//     myName: "极客邦",
//     test1: 1
// }
// function foo() {
//     this.myName = "极客时间"
// }
// foo.call(bar)
// console.log(bar)
// console.log(myName)

// console.log(this);
// var myObj = {
//     name : "极客时间", 
//     showThis: function(){
//       console.log(this)
//       var bar = ()=>{
//         this.name = "极客邦"
//         console.log(this)
//       }
//       bar()
//     }
//   }
//   myObj.showThis()
//   console.log(myObj.name)
//   console.log(window.name)


let userInfo = {
    name: "jack.ma",
    age: 13,
    sex: 'male',
    sayMyName: function() {
        console.log(this.name);
    },
    updateInfo: function () {
        _this = this;
        //模拟xmlhttprequest请求延时
        setTimeout(function(){
            (function () {
                _this.name = "pony.ma"
                _this.age = 39
                _this.sex = 'female'
            }).call(this)}, 100)
    }
}

userInfo.updateInfo()
userInfo.sayMyName();
setTimeout(function () {
    console.log(userInfo);
}, 200);

setTimeout(userInfo.sayMyName, 1000);