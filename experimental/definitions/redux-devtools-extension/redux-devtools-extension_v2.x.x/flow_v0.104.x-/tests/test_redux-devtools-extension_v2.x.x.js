// @flow
import type { DevToolsOptions as Options } from 'redux-devtools-extension';
import { composeWithDevTools as compose, devToolsEnhancer as enhancer } from 'redux-devtools-extension';
import type { DevToolsOptions as OptionsDev } from 'redux-devtools-extension/developmentOnly';
import { composeWithDevTools as composeDev, devToolsEnhancer as enhancerDev } from 'redux-devtools-extension/developmentOnly';
import type { DevToolsOptions as OptionsLog } from 'redux-devtools-extension/logOnly';
import { composeWithDevTools as composeLog, devToolsEnhancer as enhancerLog } from 'redux-devtools-extension/logOnly';
import type { DevToolsOptions as OptionsLogProd } from 'redux-devtools-extension/logOnlyInProduction';
import { composeWithDevTools as composeLogProd, devToolsEnhancer as enhancerLogProd } from 'redux-devtools-extension/logOnlyInProduction';

/*
 * DevToolsOptions types
 */
const options1: Options = {
  name: "1234",
  latency: 500,
  maxAge: 50,
  serialize: {
    date: true,
    function: (something: mixed) => {
      switch (typeof something) {
      case "undefined":
      case "number":
      case "boolean":
        return String(something);
      case "string":
        return something;
      case "function":
        return something.toString();
      case "object":
        if (something !== null) {
          return  something.toString();
        } else {
          return String(null);
        }
      }
    }
  }
};
(options1: OptionsDev);
(options1: OptionsLog);
(options1: OptionsLogProd);

// $ExpectError
const options2: Options = {
  name: 54
};
// $ExpectError
const options2: OptionsDev = {
  name: 54
};
// $ExpectError
const options2: OptionsLog = {
  name: 54
};
// $ExpectError
const options2: OptionsLogProd = {
  name: 54
};

/*
 * composeWithDevTools function
 */

(compose: typeof composeDev);
(compose: typeof composeLog);
(compose: typeof composeLogProd);

(compose(options1): Function);
(compose(options1): * => Function);
(compose((x: number): boolean => x === 0): number => boolean);
(compose((b: boolean): Array<number> => b?[0]:[], (x: number): boolean => x === 0): number => Array<number>);
// $ExpectError
(compose((b: boolean): Array<number> => b?[0]:[], (x: number): boolean => x === 0): Array<number> => number);
// $ExpectError
(compose((s: string): number => parseInt(s), (n: number): string => String(n)): string => string);
(compose((s: string): number => parseInt(s), (n: number): string => String(n)): number => number);

/*
 * devToolsEnhancer
 */
type SelfFn<A> = A => A;

enhancer();
(enhancer(options1): SelfFn<*>);
