/* @flow */

import * as React from "react";
import { compose, withProps } from "recompose";
import type { HOC } from "recompose";

function mapProps<BaseProps: {}, EnhancedProps>(
  mapperFn: EnhancedProps => BaseProps
): (React.ComponentType<BaseProps>) => React.ComponentType<EnhancedProps> {
  return Component => props => <Component {...mapperFn(props)} />;
}

type EnhancedProps = { hello: string };

const baseComponent = ({ hello, len }) => (
  <div>
    {(hello: string)}

    {
      // $FlowExpectedError
      (hello: number)
    }

    {(len: number)}

    {
      // $FlowExpectedError
      (len: string)
    }
  </div>
);

const enhancer: HOC<*, EnhancedProps> = compose(
  mapProps(({ hello }) => ({
    hello: `${hello} world`,
    len: hello.length
  })),
  withProps(props => ({
    helloAndLen: `${props.hello} ${props.len}`,
    // $FlowExpectedError
    lE: (props.len: string)
  }))
);

enhancer(baseComponent);
