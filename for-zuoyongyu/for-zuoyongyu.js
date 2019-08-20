// for(var i=0;i<5;i++){
//     console.log(i);
// }
//0 1 2 3 4 符合正常逻辑

// var a=[];
// for(var i=0;i<5;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[1](); //5 与正常逻辑不符  原因：i由var声明，是全局变量，由此所有的i都会指向同一个i，故造成所有的a[]()都打印同一个数字，即 for循环结束的值
// a[2](); //5

// var a=[];
// for(let i=0;i<5;i++){
//     a[i]=function(){
//         console.log(i);
//     };
// }
// a[0](); //0
// a[1](); //1
// a[2](); //2
//......

//结论，每次循环都会重新声明一个i变量，即每次循环中的i都不同
//let 会绑定当前作用域，故由此也可以知道，每次循环是不一样的作用域


for(let i=0;i<5;i++){
    let i='abc';
    console.log(i); //打印五个abc
}
//结论，for循环中条件区和循环内部是不同的作用域，并且条件区是内部循环区的父作用域