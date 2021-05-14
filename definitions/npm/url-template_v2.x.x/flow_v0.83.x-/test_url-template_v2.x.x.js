// @flow
import template from 'url-template';
import { it, describe } from 'flow-typed-test';

describe('url-template', () => {
  it('can parse', () => {
    const a: string = template.parse('test').expand({
      foo: 'bar',
      number: 1,
    });

    // $FlowExpectedError[incompatible-call] must be string
    template.parse(123)
    // $FlowExpectedError[incompatible-call] must have an arg
    template.parse();
    // $FlowExpectedError[extra-arg] can only have one arg
    template.parse('', '');
  });

  it('can expand', () => {
    const parsed = template.parse('test');

    parsed.expand();
    parsed.expand({ foo: 'bar' });

    // $FlowExpectedError[incompatible-cast] turns back into string
    (parsed.expand(): number);
    // $FlowExpectedError[incompatible-cast] turns back into string
    (parsed.expand(): void);
  });
});
