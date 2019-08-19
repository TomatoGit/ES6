//测试1:let 和 const对块级作用域的绑定
{
    let a=2;
    var b=3;
    const c=4;
}
// console.log(a); //ReferenceError: a is not defined
console.log(b); //3
// console.log(c); //ReferenceError: c is not defined

//结论：let 和 const 声明的变量只在对应的块级作用域中有用


//测试2:let和const 会不会变量提升
// a=3;
// console.log(a); //ReferenceError: a is not defined 
// let a;

// console.log(a); //ReferenceError: a is not defined
// const a=2;

//结论：let不会变量提升，const不能变量提升 

//var声明的变量和function声明的函数都会变量提升
//其中function声明的函数如果是这样：
// var foo=function(){}
//只有foo会变量提升，function的声明部分不会变量提升
// function foo(){} 
//函数的声明部分会变量提升