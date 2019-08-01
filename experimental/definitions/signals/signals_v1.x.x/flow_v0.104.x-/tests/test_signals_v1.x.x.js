import Signal from "signals";

var listener = function (): void {
};

var signal = new Signal();
signal.dispatch();
signal.dispatch(11);
signal.dispatch("string");

signal.add(() => {
});
// $ExpectError
signal.add(null);

// $ExpectError number. this.type is incompatible with boolean
var resultActive: number = signal.active;
var result2Active: boolean = signal.active;

// $ExpectError number. this.type is incompatible with boolean
var resultMemorize: number = signal.memorize;
var result2Memorize: boolean = signal.memorize;

signal.addOnce(() => {
});
// $ExpectError
signal.addOnce(11);

signal.dispose();

signal.forget();

var resultNum: number = signal.getNumListeners();
// $ExpectError
var resul2Num: string = signal.getNumListeners();

signal.halt();

var resultHas: boolean = signal.has(listener);
// $ExpectError
var resul2Has: string = signal.has(listener);
// $ExpectError
signal.has();

signal.remove(listener);
// $ExpectError
signal.remove(10);

signal.removeAll();

var resulString: string = signal.toString();
// $ExpectError
var result2String: boolean = signal.toString();

