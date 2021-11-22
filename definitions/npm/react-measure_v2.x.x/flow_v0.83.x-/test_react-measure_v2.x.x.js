// @flow
import { describe, it } from 'flow-typed-test';
import * as React from 'React'
import Measure, { withContentRect } from 'react-measure'

describe('react-measure', () => {
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
