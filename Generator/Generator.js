// function* foo(){//Generator函数
//     yield 'hello';//每次执行next()函数时的返回值
//     yield 'world';
//     return 'ending';//结束位置返回值为：{value:'ending',done:true}
// }
// let f=foo();//调用方式和普通函数一样,调用结果，返回遍历指针Iterator
// console.log(f.next().value);//hello
// Object {value: "hello", done: false}

// function* foo(){
//     yield 'hello';
//     yield 'world';
// }
// let iter=foo();
// for(let i of iter){
//     console.log(i);
// }
//hello
//world
//另外，yield表达式如果用在另一个表达式之中，必须放在圆括号里面。
//例如：console.log('hello'+yield)

// 与 Iterator 接口的关系
// 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

// //迭代器就是变量自身
// function* foo(){}
// let f=foo();
// console.log(f===f[Symbol.iterator]());//true