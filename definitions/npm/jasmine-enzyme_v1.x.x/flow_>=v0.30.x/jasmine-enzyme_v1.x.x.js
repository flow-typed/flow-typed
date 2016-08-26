type JasmineExpectType = {
  // native
  not: JasmineExpectType;
  toBe(value: mixed): void;
  toBeCloseTo(num: number, delta: mixed): void;
  toBeDefined(): void;
  toBeFalsy(): void;
  toBeGreaterThan(number: number): void;
  toBeLessThan(number: number): void;
  toBeNull(): void;
  toBeTruthy(): void;
  toBeUndefined(): void;
  toContain(str: string): void;
  toEqual(value: mixed): void;
  toHaveBeenCalled(): void,
  toHaveBeenCalledWith(...args: Array<any>): void;
  toMatch(regexp: RegExp): void;
  toThrow(message?: string): void;
  toThrowError(val: mixed): void;

  // extensions
  toBeChecked(): void;
  toBeDisabled(): void;
  toBeEmpty(): void;
  toBePresent(): void;
  toContainReact(ReactInstance: Object): void;
  toHaveClassName(className: string): void;
  toHaveHTML(html: string): void;
  toHaveProp(propKey: string, propValue?: any): void;
  toHaveRef(refName: string): void;
  toHaveState(stateKey: string, stateValue?: any): void;
  toHaveStyle(styleKey: string, styleValue?: any): void;
  toHaveTagName(tagName: string): void;
  toHaveText(text: string): void;
  toHaveValue(value: any): void;
  toMatchSelector(selector: string): void;
};

declare function expect(value: mixed): JasmineExpectType;
