# 说透JS变量提升以及ES6带来的块级作用域
### 变量提升

::虽然JavaScript是顺序执行的，但也是分阶段的，分为*编译阶段*以及*执行阶段*。::

```js
showName()
console.log(myname)
var myname = '极客时间'
function showName() {
    console.log('函数showName被执行');
}
```
例如：以上代码的执行结果为：
```bash
函数showName被执行
undefined
```

首先，在编译阶段，编译器会扫一遍代码，将变量的申明提升到代码顶部，类似于如下效果：
```js
// 编一阶段形成的变量申明
var myname = undefined
function showName() {
    console.log('函数showName被执行');
}

//执行阶段按顺序执行的语句
showName()
console.log(myname)
myname = '极客时间'
```

::两种不同的变量申明::

```js
function foo(){
  console.log('foo')
}
var bar = function(){
  console.log('bar')
}
```

![](/Users/jialuzhang/MyCode/es_playground/static/imgs/611c09ab995b9b608d9c0db193266777.png)

### 块级作用域

ES2015以前，只有函数作用域和全局作用域。而像一般的高级语言例如：`C++`，`Java`，都有块级作用域。

ES2015带来了 `let`，`const` 关键字，同时，新特性也支持了块级作用域。

```js
function foo(){
    var a = 1
    let b = 2
    {
      let b = 3
      var c = 4
      let d = 5
      console.log(a)  //1
      console.log(b)  //3
    }
    console.log(b)  //2
    console.log(c) // 4
    console.log(d)  //error
}   
foo()
```

在块中定义的变量，无法在外部被访问。

### 作用域链和闭包

### this体系

如果被setTimeout推迟执行的回调函数是某个对象的方法，那么该方法中的this关键字将指向全局环境，而不是定义时所在的那个对象。

```js
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
```



