const result = 'some test result';

declare function takesABool(x: boolean): void;

// native
expect(result).not.toBe({ key: 'value' });
expect(result).toBe({ key: 'value' });
expect(result).toBeCloseTo(0, 0.0000000001);
expect(result).toBeDefined();
expect(result).toBeFalsy();
expect(result).toBeGreaterThan(0);
expect(result).toBeLessThan(0);
expect(result).toBeNull();
expect(result).toBeTruthy();
expect(result).toBeUndefined();
expect(result).toContain('some text');
expect(result).toEqual(0);
expect(result).toHaveBeenCalled();
expect(result).toHaveBeenCalledWith('param1', 2, '3');
expect(result).toMatch(/^$/);
expect(result).toThrow("TypeError: 'undefined' is not a function (evaluating '$(document)')");
expect(result).toThrowError({ type: 'warning', message: 'msg' });

// extensions
expect(result).toBeChecked();
expect(result).toBeDisabled();
expect(result).toBeEmpty();
expect(result).toBePresent();
expect(result).toContainReact(<div />);
expect(result).toHaveClassName('clearfix');
expect(result).toHaveHTML('<div></div>');
expect(result).toHaveProp('width', 100);
expect(result).toHaveRef('target');
expect(result).toHaveState('active', true);
expect(result).toHaveStyle('display', 'block');
expect(result).toHaveTagName('div');
expect(result).toHaveText('Hello world!');
expect(result).toHaveValue('large');
expect(result).toMatchSelector('div.clearfix');

// $ExpectError
expect(result).toHaveStyle(0, 'block');

// $ExpectError toHaveText expects a string.
expect(result).toHaveText();

// $ExpectError JasmineExpectTypes do not return anything.
takesABool(expect(result).toHaveText('Hello world!'));
