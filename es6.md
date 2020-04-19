### 面向对象

ECMA-262把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。”

#### 创建对象

1. 传建一个 `Object` 实例，然后添加属性和方法。

   ```js
   var person = new Object();
   person.name = "Zhang San";
   person.age = 20;
   person.sayName = function() {
   	alert(this.name);
   }
   ```

   > 上面的例子创建了一个名为 person 的对象，并为它添加了两个属性(name、age)和一个 方法(sayName())。其中，sayName()方法用于显示 this.name(将被解析为 person.name)的值。

2. 对象字面量

   前面的例子可以用可以写成这样：

   ```js
   var person = {
   	name: "Zhang San",
   	age: 20,
   	
   	sayName: function(){
   		alert(this.name);
   	}
   }
   ```

####  属性类型

ECMA-262定义了一些用来描述属性各种特征的**特性**。这些特性是为了实现 JavaScript 引擎用的，因此不能直接访问这些特性。为了表示特性是内部值，该规范把它们放在了两对方括号中，例如：`[[Enumerable]]`。

ECMAScript中有两种属性：数据属性和访问器属性。

1. 数据属性

   数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有四个描述其行为的特性。

   |     特征     | 描述                                                         | 默认值    |
   | :----------: | :----------------------------------------------------------- | --------- |
   | Configurable | 表示能否通过 `delete` 删除属性从而重新定义属性               | true      |
   |  Enumerable  | 表示能否通过 for-in 循环返回属性                             | true      |
   |   Writable   | 表示能否修改属性的值                                         | true      |
   |    Value     | 包含这个属性的数据值。读取属性值的时候，从这个位置读;写入属性值的时候，把新值保存在这个位置。 | undefined |

   当直接在对象上定义的属性：

   ```js
   var person = {
   	name: "Zhang San"
   }
   ```

   这里创建了一个名为 name 的属性，为它指定的值是"Nicholas"。也就是说，`[[Value]]` 特性将 被设置为"Nicholas"，而对这个值的任何修改都将反映在这个位置。

   要修改属性默认的特性，必须使用 ECMAScript 5 的 `Object.defineProperty()` 方法。这个方法接受三个参数：属性所在的对象，属性的名字以及一个描述对象。

   ```js
   var person = {
   	name: "Zhang San"
   }
   Object.defineProperty(person, 'name', {
    writable: false,
       value: 'zjl'
   })
   
   person.name = 'yyq';
   console.log(person.name);  // zjl
   delete person.name;
   console.log(person.name);  // zjl
   ```
   
   > 把 configurable 设置为 false，表示不能从对象中删除属性。如果对这个属性调用 delete，则 在非严格模式下什么也不会发生，而在严格模式下会导致错误。**而且，一旦把属性定义为不可配置的， 就不能再把它变回可配置了。**

