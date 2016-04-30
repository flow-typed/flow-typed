type TestFunction = (() => void | Promise) | ((done : Function) => void);

declare class describe {
    static (name:string, spec:() => void): void;
    static only(description:string, spec:() => void): void;
    static skip(description:string, spec:() => void): void;
    static timeout(ms:number): void;
}
declare class it {
    static (name:string, spec:TestFunction): void;
    static only(description:string, spec:TestFunction): void;
    static skip(description:string, spec:TestFunction): void;
    static timeout(ms:number): void;
}

declare function before(method : TestFunction):void;
declare function beforeEach(method : TestFunction):void;
declare function after(method : TestFunction):void;
declare function afterEach(method : TestFunction):void;