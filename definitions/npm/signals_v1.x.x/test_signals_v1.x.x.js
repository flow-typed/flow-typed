import Signal from "signals";

var listener = function (): void {
};

var signal = new Signal();
signal.dispatch();
signal.dispatch(11);
signal.dispatch("string");

signal.add(() => {
});
// $FlowExpectedError
signal.add(null);

// $FlowExpectedError number. this.type is incompatible with boolean
var resultActive: number = signal.active;
var result2Active: boolean = signal.active;

// $FlowExpectedError number. this.type is incompatible with boolean
var resultMemorize: number = signal.memorize;
var result2Memorize: boolean = signal.memorize;

signal.addOnce(() => {
});
// $FlowExpectedError
signal.addOnce(11);

signal.dispose();

signal.forget();

var resultNum: number = signal.getNumListeners();
// $FlowExpectedError
var resul2Num: string = signal.getNumListeners();

signal.halt();

var resultHas: boolean = signal.has(listener);
// $FlowExpectedError
var resul2Has: string = signal.has(listener);
// $FlowExpectedError
signal.has();

signal.remove(listener);
// $FlowExpectedError
signal.remove(10);

signal.removeAll();

var resulString: string = signal.toString();
// $FlowExpectedError
var result2String: boolean = signal.toString();

