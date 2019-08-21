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

