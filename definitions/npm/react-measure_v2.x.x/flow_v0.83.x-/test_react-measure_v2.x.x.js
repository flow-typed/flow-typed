// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'React'
import Measure, { withContentRect } from 'react-measure'

describe('react-measure', () => {
  it('can be passed nothing', () => {
    <Measure />
  });

  it('handles basic use case', () => {
    const dimensions = {
      width: -1,
      height: -1,
    };

    const { width, height } = dimensions;

    (
      <Measure
        bounds
        onResize={contentRect => {

        }}
      >
        {({ measureRef }) => (
          <div ref={measureRef} className="className">
            I can do cool things with my dimensions now :D
            {height > 250 && (
              <div>Render responsive content based on the component size!</div>
            )}
          </div>
        )}
      </Measure>
    );
  });

  it('ref can be passed correctly', () => {
    const ref = React.createRef();
    <Measure innerRef={ref.current} />;

    <Measure innerRef={null} />;

    const ele = document.getElementById('test');
    <Measure innerRef={ele} />;

    // $FlowExpectedError[incompatible-type] must be HTMLElement if populated
    <Measure innerRef="test" />;
  })

  it('error cases', () => {
    // $FlowExpectedError[prop-missing] Component does not accept `random` as a prop
    <Measure
      // $FlowExpectedError[incompatible-type] boolean only
      client={123}
      // $FlowExpectedError[incompatible-type] boolean only
      offset={123}
      // $FlowExpectedError[incompatible-type] boolean only
      scroll={123}
      // $FlowExpectedError[incompatible-type] boolean only
      bounds={123}
      // $FlowExpectedError[incompatible-type] boolean only
      margin={123}
      random
    >
      {/** $FlowExpectedError[incompatible-type] accepts render functions only */}
      123
    </Measure>
  });

  describe('withContentRect', () => {
    it('calls correctly', () => {
      const ItemToMeasure = withContentRect('bounds')(
        ({ measureRef, measure, contentRect }) => (
          <div ref={measureRef}>
            Some content here
            <pre>{JSON.stringify(contentRect, null, 2)}</pre>
          </div>
        )
      );

      <ItemToMeasure />
    });
  })
});
