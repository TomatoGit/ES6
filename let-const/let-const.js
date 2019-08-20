//测试1:let 和 const对块级作用域的绑定
// {
//     let a=2;
//     var b=3;
//     const c=4;
// }
// console.log(a); //ReferenceError: a is not defined
// console.log(b); //3
// console.log(c); //ReferenceError: c is not defined

//结论：let 和 const 声明的变量只在对应的块级作用域中有用


//测试2:let和const 会不会变量提升
// a=3;
// console.log(a); //ReferenceError: a is not defined 
// let a;

// console.log(a); //ReferenceError: a is not defined
// const a=2;

//结论：let不会变量提升，const也不会变量提升 

//var声明的变量和function声明的函数都会变量提升
//其中function声明的函数如果是这样：
// var foo=function(){}
//只有foo会变量提升，function的声明部分不会变量提升
// function foo(){} 
//函数的声明部分会变量提升

//注：如果是这样
// foo();  //TypeError: foo is not a function  变量提升了，只是变量类型不是函数，调用错误
// var foo=function(){
//     console.log("hello");
// }
//等号右边的function定义的函数不会变量提升


// let a=10;
// let a=20;   //SyntaxError: Identifier 'a' has already been declared     //ES6规定，let声明的变量，不可以重复声明
// console.log(a);

//ES6只有全局作用域和函数作用域，没有块级作用域
// var a=new Date();
// function f(){
//     console.log(a);
//     if(false){
//         var a="hello false";
//     }
// }
// f();    //undefined
//分析：原意是想输出函数外部Date的值，但是if块中的声明属于函数作用域，变量提升，覆盖了外部变量的声明

//探索
// let a=0;
// {
//     let a=2;
//     console.log(a); //2
// }
// console.log(a); //0
//结论：大括号内外的let声明不会发生重复声明覆盖和冲突

//new探索
// let a=0;
// if(true){
//     // let a=2;
//     console.log(a); //2
// }
//if的外部作用域和内部作用域是父子关系，和for循环有些类似

//探索new1
// let a=0;
// {
//     console.log(a); //0     外部作用域和大括号内部作用域是父作用域和自作用域的关系
// }

//探索
// {
    // let a=0;
// }
// console.log(a); //ReferenceError: a is not defined  大括号内部的声明不能用于父作用域


//块内函数
function doo(){
    console.log("d00");
}
{
    if(false){
        function doo(){
            console.log("doo");
        }
    }
    doo();  //d00，即没有被上面块覆盖，即在块中定义的函数只在当前块有效
}