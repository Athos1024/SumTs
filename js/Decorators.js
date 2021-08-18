var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Decorators;
(function (Decorators) {
    //类装饰器
    function logClass1(params) {
        return function (target) {
            console.log(params);
            console.log(target);
        };
    }
    //成员装饰器
    function attr(params) {
        return function (target, attr) {
            console.log(params);
            console.log(target);
            console.log(attr);
        };
    }
    //方法装饰器
    function logMethod(params) {
        return function (target, methodName, desc) {
            console.log('logMethod=============');
            console.log(target);
            console.log(methodName);
            console.log(desc);
            console.log('end');
        };
    }
    //参数装饰器
    function logParams(params) {
        return function (target, methodName, paramsIndes) {
            console.log('logParams==============');
            console.log(target);
            console.log(methodName);
            console.log(paramsIndes);
            console.log('end');
        };
    }
    let A = class A {
        foo(a) {
        }
    };
    __decorate([
        attr("att")
    ], A.prototype, "ele", void 0);
    __decorate([
        logMethod('method'),
        __param(0, logParams('params'))
    ], A.prototype, "foo", null);
    A = __decorate([
        logClass1("log")
    ], A);
    let a = new A();
    a.ele = "str";
})(Decorators || (Decorators = {}));
//# sourceMappingURL=Decorators.js.map