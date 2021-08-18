/**
 * ​
1、首先在全局安装node.js

2、在全局安装TS

npm install -g typescript

2、创建 tsconfig.json                 运行   
  tsc --init
​
3 创建packet.json
 npm init

 */




/*  
class A{
    constructor(){
    }
    foo(){
        console.log("foo");
    }
}

// console.log(A.__proto__)//指向父类
// console.log(A.__proto__.__proto__)
// console.log(A.__proto__.__proto__.__proto__);
// console.log('==================');
// console.log(A.prototype);//指向构造函数
// console.log(A.prototype.prototype);

console.log('==================');
let a = new A();
console.log(a.__proto__.foo == A.prototype.foo);
console.log(a.pro == A.prototype.foo);


__proto__ 是每个实例都有的属性，可以访问 [[prototype]] 属性。
prototype是构造函数的属性。

__proto__是每个对象都有的一个属性，而prototype是函数才会有的属性!!! 
 使用Object.getPrototypeOf()代替__proto__!!!


 */