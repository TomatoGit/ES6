// includes(), startsWith(), endsWith() 
// let str='Hello world!';
// console.log(str.includes('Hello')); //true
// console.log(str.startsWith('Hello')); //true
// console.log(str.endsWith('!')); //true

// 这三个方法都支持第二个参数，表示开始搜索的位置。
// let s='hello world!';
// console.log(s.startsWith('world',6));   //true
// console.log(s.endsWith('hello',5));     //true   针对前五个字符
// console.log(s.includes('hello',6));     //false


//repeat方法返回一个新字符串，表示将原字符串重复n次。
// let str='x';
// let newstr=str.repeat(3);
// console.log(str);
// console.log(newstr);

// let s='na'.repeat(NaN);//NaN会被视为0
// console.log(s); //''

// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全
// let str='x'.padStart(5,'ab');//ababx
// console.log(str);

// let s='x'.padEnd(4,'ab');
// console.log(s);//xaba


// ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与trim()一致，
// trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串
let st=' x x x x ';
let str=st.trimStart();
let s=st.trimEnd();
console.log(st);
console.log(str);
console.log(s);