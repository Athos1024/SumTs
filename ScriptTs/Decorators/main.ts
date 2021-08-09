namespace Decorators {

    //类装饰器
    function logClass1(params: any) {
        return function (target: any) {
            console.log(params);
            console.log(target);
        }
    }

    //成员装饰器
    function attr(params: any) {
        return function (target: any, attr: any) {
            console.log(params);
            console.log(target)
            console.log(attr)
        }
    }

    //方法装饰器
    function logMethod(params: any) {
        return function (target: any, methodName: any, desc: any) {
            console.log('logMethod=============');
            console.log(target);
            console.log(methodName);
            console.log(desc);
            console.log('end');
            
        }
    }


    //参数装饰器
    function logParams(params: string) {
        return function (target: any, methodName: any, paramsIndes: any) {
            console.log('logParams==============');
            console.log(target)
            console.log(methodName)
            console.log(paramsIndes)
            console.log('end');
            
        }
    }

  

    @logClass1("log")
    class A {

        @attr("att")
        public ele: string


        @logMethod('method')
        foo(@logParams('params') a:number) {

        }
    }

    let a = new A();
    a.ele = "str"
    a.foo
}