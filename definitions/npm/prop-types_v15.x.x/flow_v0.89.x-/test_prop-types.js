// @flow
import { describe, it } from 'flow-typed-test';
import PropTypes from 'prop-types';

describe('PropType Primitives', () => {
  it('should passes when used properly', () => {
    (PropTypes.oneOf(['small', 'medium', 'large']): React$PropType$Primitive<
      'small' | 'medium' | 'large'
    >);

    (PropTypes.arrayOf(PropTypes.number).isRequired: React$PropType$Primitive<
      Array<number>
    >);

    const XShape = {
      x: PropTypes.number.isRequired,
    };

    const FooShape = {
      foo: (PropTypes.shape(XShape)
        .isRequired: React$PropType$Primitive$Required<{
        x: number,
      }>),
    };

    (PropTypes.shape(FooShape): React$PropType$Primitive<{
      foo: {
        x: number,
      },
    }>);
  });
});

describe('checkPropTypes()', () => {
  it('should passes when used properly', () => {
    PropTypes.checkPropTypes(
      { foo: PropTypes.string },
      { foo: 'foo' },
      'value',
      'TestComponent'
    );
  });

  it('raises an error when do not pass all required arguments', () => {
    // $ExpectError missing arguments
    PropTypes.checkPropTypes({ foo: PropTypes.string }, { foo: 'foo' });
    // $ExpectError missing argument
    PropTypes.checkPropTypes(
      { foo: PropTypes.string },
      { foo: 'foo' },
      'value'
    );
  });

  it("raises an error when passed `values` object don't same props in `propTypes` object", () => {
    const propTypes = { bar: PropTypes.string };
    const values = { foo: 'foo' };

    PropTypes.checkPropTypes(
      propTypes,
      // $ExpectError property not found
      values,
      'value',
      'TestComponent'
    );
  });

  describe('fifth argument, getStack function ', () => {
    it('raises an error when a getStack function do not return ?string', () => {
      PropTypes.checkPropTypes(
        { foo: PropTypes.string },
        { foo: 'foo' },
        'value',
        'TestComponent',
        // $ExpectError 123:number -> string
        () => 123
      );
    });

    it('should passes when a getStack function return null or void', () => {
      PropTypes.checkPropTypes(
        { foo: PropTypes.string },
        { foo: 'foo' },
        'value',
        'TestComponent',
        () => null
      );

      PropTypes.checkPropTypes(
        { foo: PropTypes.string },
        { foo: 'foo' },
        'value',
        'TestComponent',
        () => undefined
      );
    });
  });
});
