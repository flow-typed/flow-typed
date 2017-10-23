// @flow
import * as React from "react";
import glamorous, {
  Span,
  type GlamorousComponent,
  type CSSProperties
} from "glamorous";

const canBeBlue = ({ isBlue }: { isBlue: boolean }) => ({
  color: isBlue ? "blue" : "red"
});

const margin = ({ ml }: { ml: number }) => ({
  marginLeft: ml
});

// No css properties
(glamorous.div(): GlamorousComponent<React$ElementProps<"div">, {}>);
(glamorous.div(null): GlamorousComponent<React$ElementProps<"div">, {}>);
(glamorous.div(undefined): GlamorousComponent<React$ElementProps<"div">, {}>);
(glamorous.div(false): GlamorousComponent<React$ElementProps<"div">, {}>);
(glamorous.div({}): GlamorousComponent<React$ElementProps<"div">, {}>);
// $ExpectError: Invalid css properties
glamorous.div({ notCSS: true });

// Valid css properties
(glamorous.div({ color: "red" }): GlamorousComponent<
  React$ElementProps<"div">,
  {}
>);

// A style function
(glamorous.div(canBeBlue): GlamorousComponent<
  React$ElementProps<"div">,
  { isBlue: boolean }
>);

// Multiple style functions
(glamorous.div(canBeBlue, margin): GlamorousComponent<
  React$ElementProps<"div">,
  { isBlue: boolean, ml: number }
>);

const MyDiv = glamorous.div(canBeBlue);
// $ExpectError: Enforce style function required props
<MyDiv />;
<MyDiv isBlue />;
// $ExpectError: Enforce style function prop types
<MyDiv isBlue={3} />;

(glamorous(MyDiv)(margin): GlamorousComponent<
  React$ElementProps<typeof MyDiv>,
  { isBlue: boolean, ml: number }
>);

(MyDiv.withComponent("span"): GlamorousComponent<
  React$ElementProps<"span">,
  { isBlue: boolean }
>);

glamorous(MyDiv, {
  displayName: "MyGlamorousDiv",
  rootEl: "div",
  filterProps: ["a", "b"],
  forwardProps: ["a", "b"],
  shouldClassNameUpdate: (props, previousProps, context, previousContext) =>
    true,
  propsAreCssOverrides: false,
  withProps: {
    isBlue: true
  }
})();

<Span marginLeft={3} />;
// $ExpectError
<Span marginLeft={true} />;
<glamorous.Span marginLeft={3} />;

const css: CSSProperties = {
  color: "blue",
  foo: {
    color: "blue"
  }
};

glamorous.div({ ":first-child": { color: "blue" } });

class ClassComponent extends React.Component<{
  x: number,
  className?: string,
  theme?: Object
}> {
  render() {
    return null;
  }
}

const StyledClassComponent = glamorous(ClassComponent)();

// $ExpectError
<StyledClassComponent />;
<StyledClassComponent x={3} />;

class ClassComponentWithDefaults extends React.Component<{
  x: number,
  className?: string,
  theme?: Object
}> {
  static defaultProps = { x: 3 };
  render() {
    return null;
  }
}

const StyledClassComponentWithDefaults = glamorous(
  ClassComponentWithDefaults
)();

<StyledClassComponentWithDefaults />;
<StyledClassComponentWithDefaults x={3} />;
// $ExpectError
<StyledClassComponentWithDefaults x="3" />;

const ClassComponentWithProps = StyledClassComponent.withProps({ x: 3 });

// withProps extends default props
<ClassComponentWithProps />;
// withProps props can be overridden
<ClassComponentWithProps x={4} />;
// $ExpectError: withProps preserves prop types
<ClassComponentWithProps x="3" />;

const ClassComponentWithNoProps = StyledClassComponent.withProps({});
<ClassComponentWithNoProps x={4} />;
// $ExpectError: withProps preserves propTypes
<ClassComponentWithNoProps />;
// $ExpectError: withProps preserves propTypes
<ClassComponentWithNoProps x="3" />;

// $ExpectError: withProps only accepts props that exist
StyledClassComponent.withProps({ notAProp: 3 });
