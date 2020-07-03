### 面向对象

ECMA-262把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。”

#### 创建对象

1. 创建一个 `Object` 实例，然后添加属性和方法。

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

以上两种方式有个明显的缺点:使用同一个接口创建很多对象，会产生大量的重复代码。

##### 工厂模式

```js
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        alert(this.name);
    };
    return o;
}

var person1 = createPerson("Nicholas", 29, "Software Engineer"); 
var person2 = createPerson("Greg", 27, "Doctor");
```

工厂模式虽然解决了创建 多个相似对象的问题，但却没有解决对象识别的问题(即怎样知道一个对象的类型)

##### 构造函数模式

ECMAScript 中的构造函数可用来创建特定类型的对象。像 Object 和 Array 这样的原生构造函数，在运行时会自动出现在执行环境中。此外，也可以创建自定义的构造函数，从而定义自定义对象类型的属性和方法。例如，可以使用构造函数模式将前面的例子重写如下。

```js
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    };
}
var person3 = new Person("Nicholas", 29, "Software Engineer");
var person4 = new Person("Greg", 27, "Doctor");
```

在这个例子中，Person()函数取代了 createPerson()函数。我们注意到，Person()中的代码 除了与 createPerson()中相同的部分外，还存在以下不同之处:

+ 没有显式地创建对象;
+ 直接将属性和方法赋给了 this 对象; 
+ 没有 return 语句。

> 此外，函数名 Person 使用的是大写字母 P。按照惯例，构造函数始终都应该以一个 大写字母开头，而非构造函数则应该以一个小写字母开头。这个做法借鉴自其他 OO 语言，主要是为了 区别于 ECMAScript 中的其他函数;因为构造函数本身也是函数，只不过可以用来创建对象而已。

在前面例子的最后，person3和person4分别保存着Person的一个不同的实例。这两个对象都有一个 `constructor` (构造函数)属性，该属性指向Person。

```js
console.log(person3.constructor == Person); //true
```

对象的 constructor 属性最初是用来标识对象类型的。但是，提到检测对象类型，还是 instanceof 操作符要更可靠一些。我们在这个例子中创建的所有对象既是 Object 的实例，同时也是 Person 的实例，这一点通过 instanceof 操作符可以得到验证。

```js
console.log(person3 instanceof Object);  //true
console.log(person3 instanceof Person);  //true
```

创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型;而这正是构造函数模式 胜过工厂模式的地方。在这个例子中，person1 和 person2 之所以同时是 Object 的实例，是因为所 有对象均继承自 Object。



####  属性类型

ECMA-262定义了一些用来描述属性各种特征的**特性**。这些特性是为了实现 JavaScript 引擎用的，因此不能直接访问这些特性。为了表示特性是内部值，该规范把它们放在了两对方括号中，例如：`[[Enumerable]]`。

ECMAScript中有两种属性：数据属性和访问器属性。

1. 数据属性

   数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有四个描述其行为的特性。

   |     特性     | 描述                                                         | 默认值    |
   | :----------: | :----------------------------------------------------------- | --------- |
   | Configurable | 表示能否通过 `delete` 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。 | true      |
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
   
   Object.defineProperty(person, 'name', {
       configurable: false
   })
   
   delete person.name;
   console.log(person.name);  // zjl
   ```
   
   > 把 configurable 设置为 false，表示不能从对象中删除属性。如果对这个属性调用 delete，则 在非严格模式下什么也不会发生，而在严格模式下会导致错误。**而且，一旦把属性定义为不可配置的， 就不能再把它变回可配置了。**
   
   例如，对上面的对象在重新设置 `[[writeable]` ]特性将出现报错：
   
   ```js
   Object.defineProperty(person, 'name', {
       writable: true
   })
   ```
   
   ```bash
   Object.defineProperty(person, 'name', {
          ^
   
   TypeError: Cannot redefine property: name
   ...
   ```
   
   > 在调用 Object.defineProperty()方法时，如果不指定，configurable、enumerable 和 writable 特性的默认值都是 false。
   
2. 访问器属性

   访问器属性不包含数据值;它们包含一对 `getter`  和  `setter`  函数(不过，这两个函数都不是必需的)。

   在读取访问器属性时，会调用 getter 函数，这个函数负责返回有效的值;在写入访问器属性时，会调用 setter 函数并传入新值，这个函数负责决定如何处理数据。访问器属性有如下 4 个特性。

   |     特性     | 描述                                                         |  默认值   |
   | :----------: | :----------------------------------------------------------- | :-------: |
   | Configurable | 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特 性，或者能否把属性修改为数据属性。 |   true    |
   |  Enumerable  | 表示能否通过 for-in 循环返回属性。                           |   true    |
   |     Get      | 在读取属性时调用的函数。                                     | undefined |
   |     Set      | 在写入属性时调用的函数。                                     | undefined |

   看到这里，你也许会有疑惑，那类似于上面用对象字面量定义的对象，其属性是什么属性呢？答案是：数据属性。因为，**访问器属性不能直接定义，必须使用 Object.defineProperty()来定义。**

   ```js
   var person = {
       _firstName: "Zhang",
       _lastName: "San"
   }
   
   Object.defineProperty(person, 'name', {
       get: function() {
           return this._firstName + ' ' + this._lastName;
       },
   
       set: function(lastName) {
           this._lastName = lastName;
           console.log('Congratulations!!!');
       }
   })
   
   console.log(person.name); //Zhang San
   person.name = 'Jialu';    //Congratulations!!!
   console.log(person.name); //Zhang Jialu
   ```

   以上代码创建了一个对象，并给它定义了两个默认的属性：`_firstName`，`_lastName`。前面的下划线是一种常用的记号，用于表示只能通过对象方法访问的属性。而访问器属性 year 则包含一个 getter 函数和一个 setter 函数。

   > 不一定非要同时指定 getter 和 setter。只指定 getter 意味着属性是不能写，尝试写入属性会被忽略。 在严格模式下，尝试写入只指定了 getter 函数的属性会抛出错误。类似地，只指定 setter 函数的属性也 不能读，否则在非严格模式下会返回 undefined，而在严格模式下会抛出错误。

   兼容性：

   <div style="text-align:center;">
     <img src="./static/imgs/defineProperty.png">
   </div>

   支持 ECMAScript 5 的这个方法的浏览器有 IE9+(IE8 只是部分实现)、Firefox 4+、Safari 5+、Opera 12+和 Chrome。在这个方法之前，要创建访问器属性，一般都使用两个非标准的方法: `__defineGetter__()` 和 `__defineSetter__()` 。

   ```js
   person.__defineGetter__("name", function() {
       return this._firstName + ' ' + this._lastName;
   })
   person.__defineSetter__("name", function(lastName) {
       this._lastName = lastName;
       console.log('Congratulations!!!');
   })
   ```

   在 不 支 持 Object.defineProperty() 方 法 的 浏 览 器 中 不 能 修 改 `[[Configurable]]`  和  `[[Enumerable]]` 。



#### 定义多个属性

利用 `Object.defineProperties()方法` 可以一次定义多个属性。

```js
var person = {}

Object.defineProperties(person, {
    _firstName: {
        value: "Zhang"
    },
    _lastName: {
        value: "San"
    },
    name: {
        get: function() {
            return this._firstName + ' ' + this._lastName;
        },
        set: function(lastName) {
            this._lastName = lastName;
            console.log('Congratulations!!!');
        }
    }
})

console.log(person.name);
person.name = 'Jialu';
console.log(person.name);
```

#### 读取属性的特性

使用 ECMAScript 5 的 Object.getOwnPropertyDescriptor()方法，可以取得给定属性的描述符。这个方法接收两个参数:属性所在的对象和要读取其描述符的属性名称。返回值是一个对象，如果 是访问器属性，这个对象的属性有 configurable、enumerable、get 和 set;如果是数据属性，这 个对象的属性有 configurable、enumerable、writable 和 value。

```js
var person = {
    _firstName: "Zhang",
    _lastName: "San"
}

Object.defineProperty(person, 'name', {
    get: function() {
        return this._firstName + ' ' + this._lastName;
    },

    set: function(lastName) {
        this._lastName = lastName;
        console.log('Congratulations!!!');
    }
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
```

```sh
{ 
	get: [Function: get],
  set: [Function: set],
  enumerable: false,
  configurable: false 
}
```