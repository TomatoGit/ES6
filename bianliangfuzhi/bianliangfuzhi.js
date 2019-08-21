//数组的解构赋值
// let [a,b,c]=[1,2,3];
// console.log(a); //1
// console.log(b); //2
// console.log(c); //3
//本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。


// let [,,a]=[[],[],'a'];
// console.log(a); //a


// let [a,...b]=[1,2,3];
// console.log(a); //1
// console.log(b); //Array(2) [2, 3]


// let [x,y,...z]=[1];
// console.log(x); //1
// console.log(y); //undefined
// console.log(z); //Array(0) []


//如果解构不成功，变量的值就等于undefined。
// let [foo]=[];
// console.log(foo);   //undefined

//如果等号的右边不是数组（或者严格地说，不是可遍历的结构），那么将会报错。
// let [foo]=1;
// console.log(foo);   //TypeError: 1 is not iterable

// 对于 Set 结构，也可以使用数组的解构赋值。
// let [a,b,c]=new Set([1,2,3]);
// console.log(a,b,c); //1 2 3

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值。
// 例子之后再补充

//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
// let [x=1]=[undefined];
// console.log(x); //1

// let [x=1]=[null];
// console.log(x); //null  null不严格等于undefined

// 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
// function foo(){
//     console.log('foo');
// }
// let [f=foo()]=[1];
// console.log(f); //1 根本不会执行foo()函数

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined



//对象的解构赋值
//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，
//变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let {foo,bar}={foo:"foo",baz:"baz"};
// console.log(foo);   //foo
// console.log(bar);   //undefined

// let {foo,bar}={bar:"foo",foo:"bar"};
// console.log(foo,bar);    //bar foo

// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
// let {log,sin,cos}=Math;
// let x=log(2);   //0.6931471805599453===ln2
// console.log(x); //0.6931471805599453
// console.log(sin(Math.PI/2));    //1
// console.log(cos(Math.PI));  //-1


// const {log}=console;    //log===console.log
// log(10);    //10
// log(console.log===log); //true

//对象的解构赋值是下面形式的简写
// let {foo:foo}={foo:10};
// console.log(foo);   //10

//因此
// let {foo:baz}={foo:"123"};
// console.log(baz);   //123
// console.log(foo);   //ReferenceError: foo is not defined

//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

// let obj={first:"hello",second:"world"};
// let {first:f,second:s}=obj;
// const {log}=console;
// log(f); //hello 
// log(s); //world

//嵌套测试
// let {p:{f:z}}={
//     p:{
//         f:"20",
//     },
// }
// console.log(f);//ReferenceError: f is not defined
// console.log(z); //20

//已经声明的变量的正确解构赋值
// let a;
// ({a}={a:3});
// console.log(a);//3
//建议只要有可能，就不要在模式中放置圆括号。

//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。
// let a=[1,2,3];
// let {0:first,[a.length-1]:last}=a;
// console.log(first,last);    //1 3

//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
// let str="123456";
// let [a,b,c,d,e,f]=str;
// console.log(a,b,c,d,e,f);//1 2 3 4 5 6

// let {length:len}="123";
// console.log(len);   //3

//交换变量的值
// let a=1;
// let b=2;
// [a,b]=[b,a];
// console.log(a,b);   //2 1

//从函数返回多个值
// function foo(){
//     return [1,2,3];
// }
// let [a,b,c]=foo();
// console.log(a,b,c); //1 2 3
// function foo(){
//     return {
//         a:1,
//         b:2,
//     }
// }
// let {a,b}=foo();
// console.log(a,b);   //1 2

//函数参数的定义
// function foo([a,b,c]){
//     "...";
// }
// foo([1,2,3]);//必须有序放置参数
// function foo({a,b}){}
// foo({b:2,a:1}); //可以无序，但是必须指明哪个参数


//函数的默认参数
// jQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global = true,
//     // ... more config
//   } = {}) {
//     // ... do stuff
//   };


//遍历 Map 结构
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }
// // first is hello
// // second is world
// 如果只想获取键名，或者只想获取键值，可以写成下面这样。
// 获取键名
// for (let [key] of map) {
//     // ...
//   }
  
//   // 获取键值
//   for (let [,value] of map) {
//     // ...
//   }

