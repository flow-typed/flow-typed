type TestFunction = ((done: () => void) => void | Promise<mixed>);

declare var describe : {
    (name:string, spec:() => void): void;
    only(description:string, spec:() => void): void;
    skip(description:string, spec:() => void): void;
    timeout(ms:number): void;
};

declare var context : typeof describe;

declare var it : {
    (name:string, spec?:TestFunction): void;
    only(description:string, spec:TestFunction): void;
    skip(description:string, spec:TestFunction): void;
    timeout(ms:number): void;
};

declare function before(name?:string, method : TestFunction):void;
declare function beforeEach(name?:string, method : TestFunction):void;
declare function after(name?:string, method : TestFunction):void;
declare function afterEach(name?:string, method : TestFunction):void;
