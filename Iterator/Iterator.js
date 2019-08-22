// let arr=[1,2,3];
// let iter=arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// //Object {value: 1, done: false}
// // Object {value: 2, done: false}
// // Object {value: 3, done: false}
// // Object {value: undefined, done: true}

// class RangeIterator{
//     constructor(start,stop){
//         this.value=start;
//         this.stop=stop;
//     }
//     [Symbol.iterator](){return this;}
//     next(){
//         var value=this.value;
//         if(value<this.stop){
//             this.value++;
//             return {
//                 done:false,
//                 value:this.value,
//             }
//         }
//         return {
//             done:true,
//             value:undefined,
//         }
//     }
// }
// function range(start,stop){
//     return new RangeIterator(start,stop);
// }
// for(var value of range(0,3)){
//     console.log(value);
// }
//1
//2
//3

//上面代码是一个类部署 Iterator 接口的写法。Symbol.iterator属性对应一个函数，执行后返回当前对象的遍历器对象。
//所以for...of循环可以使用

// function Obj(value){
//     this.value=value;
//     this.next=null;
// }
// Obj.prototype[Symbol.iterator]=function(){
//     var iterator={next:next};   //迭代器
//     var current=this;   //指向当前的对象
//     function next(){    //迭代器遍历移到函数
//         if(current){    //判断当前current是否指向空对象
//             var value=current.value;
//             current=current.next;
//             return {done:false,value:value};
//         }else{
//             return {done:true};
//         }
//     }
//     return iterator;
// }
// var one=new Obj(1);
// var two=new Obj(2);
// var three=new Obj(3);
// one.next=two;
// two.next=three;
// //one->two->three
// for(var value of one){//变量名可以随意定，不一定是value
//     console.log(value);
// }
//1
//2
//3
//上面代码首先在构造函数的原型链上部署Symbol.iterator方法，调用该方法会返回遍历器对象iterator，
//调用该对象的next方法，在返回一个值的同时，自动将内部指针移到下一个实例。

// var Obj={
//     data:['Hello','World'],
//     [Symbol.iterator](){
//         const self=this;
//         var index=0;
//         return {
//             next(){
//                 if(index<self.data.length){
//                     return {
//                         done:false,
//                         value:self.data[index++]
//                     }
//                 }else{
//                     return {
//                         done:true,
//                         value:undefined
//                     }
//                 }
//             }
//         };
//     }
// };
// for(var i of Obj.data){
//     console.log(i);
// }
//Hello
//World

// 下面是另一个类似数组的对象调用数组的Symbol.iterator方法的例子。
// var Obj={
//     0:1,
//     1:2,
//     2:3,
//     length:3,
//     [Symbol.iterator]:Array.prototype[Symbol.iterator], //赋值为数组的方法
// }
// for(var item of Obj){
//     console.log(item);
// }
//1 2 3
//但是如果改为不类似于数组的对象就会出错
// var Obj={
//     a:1,
//     b:2,
//     c:3,
//     length:3,
//     [Symbol.iterator]:Array.prototype[Symbol.iterator], //赋值为数组的方法
// }
// for(var item of Obj){
//     console.log(item);
// }
// undefined
// undefined
// undefined

// 如果Symbol.iterator方法对应的不是遍历器生成函数（即会返回一个遍历器对象），解释引擎将会报错。

//对数组和 Set 结构进行解构赋值时，会默认调用Symbol.iterator方法。
// let set=new Set().add('a').add('b').add('c');
// let [x,y]=set;
// let [m,...n]=set;
// console.log([x,y]);
// console.log(m);
// console.log(n);
// Array(2) ["a", "b"]
// a
// Array(2) ["b", "c"]

//扩展运算符（...）也会调用默认的 Iterator 接口。