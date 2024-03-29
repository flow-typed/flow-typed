// @flow

import { describe, it } from 'flow-typed-test';

import * as React from 'react';
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  withTheme,
  useTheme,
  ThemeContext,
  type CSSRules,
  type KeyFrames,
  type StyledComponent,
} from 'styled-components';

describe('styled builtins', () => {
  it('should map to correct element', () => {
    const Span1: StyledComponent<
      { ... },
      { ... },
      HTMLSpanElement
    > = styled.span``;
    const Div1: StyledComponent<
      { ... },
      { ... },
      HTMLDivElement
    > = styled.div``;

    const Span2: StyledComponent<{ ... }, { ... }, HTMLSpanElement> = styled(
      'span'
    )``;
    const Div2: StyledComponent<{ ... }, { ... }, HTMLDivElement> = styled(
      'div'
    )``;
  });

  it('should not map to incorrect element', () => {
    const Span1: StyledComponent<
      { ... },
      { ... },
      HTMLDivElement
    // $FlowExpectedError[incompatible-type-arg] - should be HTMLSpanElement
    > = styled.span``;

    const Div1: StyledComponent<
      { ... },
      { ... },
      HTMLSpanElement
    // $FlowExpectedError[incompatible-type-arg] - should be HTMLDivElement
    > = styled.div``;

    // $FlowExpectedError[incompatible-type-arg] - Should be HTMLSpanElement
    const Span2: StyledComponent<{ ... }, { ... }, HTMLDivElement> = styled(
      'span'
    )``;

    // $FlowExpectedError[incompatible-type-arg] - should be HTMLDivElement
    const Div2: StyledComponent<{ ... }, { ... }, HTMLSpanElement> = styled(
      'div'
    )``;
  });

  it('should render as the correct element', () => {
    const Span: StyledComponent<
      { ... },
      { ... },
      HTMLSpanElement
    > = styled.span``;
    const Div: StyledComponent<{ ... }, { ... }, HTMLDivElement> = styled.div``;

    const span1: React.Element<
      React.AbstractComponent<{ [key: string]: any, ... }, HTMLSpanElement>
    > = <Span />;

    const div1: React.Element<
      // noExpectError - should be HTMLDivElement
      React.AbstractComponent<{ [key: string]: any, ... }, HTMLDivElement>
    > = <Div />;
  });

  it("shouldn't style something impossible", () => {
    // $FlowExpectedError[incompatible-call]
    const derp1 = styled(null)``;

    // $FlowExpectedError[incompatible-call]
    const derp2 = styled({})``;

    // $FlowExpectedError[incompatible-call]
    const derp3 = styled(1)``;

    // $FlowExpectedError[incompatible-use]
    const derp4 = styled.derp``;

    // $FlowExpectedError[incompatible-call]
    const derp5 = styled('derp')``;
  });

  it('should accept style props', () => {
    const Span: StyledComponent<{ color: string, ... }, any, any> = styled.span`
      color: ${props => props.color};
    `;

    const span1 = <Span color="maroon" />;

    const Div: StyledComponent<
      {
        color: string,
        background?: string,
        ...
      },
      any,
      any
    > = styled.div`
      color: ${props => props.color};
    `;

    const div1 = <Div color="maroon" />;
    const div2 = <Div color="maroon" background="salmon" />;
  });

  it('should validate template props', () => {
    const Span: StyledComponent<{ color: string, ... }, any, any> = styled.span`
      color: ${// $FlowExpectedError[prop-missing] - background is not in props
      props => props.background};
    `;
  });

  it('should inject theme', () => {
    const Span: StyledComponent<
      { color?: string, ... },
      { accent: string, ... },
      any
    > = styled.span`
      color: ${props => props.color || props.theme.accent};
    `;
  });

  it('supports common props that styled components accept', () => {
    const Span: StyledComponent<{ color: string, ... }, any, any> = styled.span`
      color: ${props => props.color};
    `;

    const span1 = <Span color="maroon" className="marooned" />;
    const span2 = <Span color="maroon" style={{ padding: 5 }} />;

    // $FlowExpectedError[incompatible-use] - Make sure we don't break soundness when props are missing!
    const span3 = <Span style={{ padding: 5 }} />;
  });

  it('exposes common props inside interpolations', () => {
    const Span: StyledComponent<{ color: string, ... }, any, any> = styled.span`
      color: ${props => props.color};
      /* People reading this test: this is a horrible way to dynamically scale your component! */
      height: calc(${props => React.Children.count(props.children)} * 20px);
    `;
  });

  it('should validate theme', () => {
    const Span: StyledComponent<
      { color?: string, ... },
      { accent: string, ... },
      any
    > = styled.span`
      color: ${// $FlowExpectedError[prop-missing] - oops, someone meant accent, not primary
      props => props.color || props.theme.primary};
    `;
  });

  it('should support .attrs', () => {
    const AttrsInput = styled.input.attrs<_, {| size: string |}>({
      // we can define static props
      type: 'password',
      // or we can define dynamic ones
      margin: props => {
        (props.size: string);
        return props.size;
      },
      padding: props => {
        (props.size: string);
        return props.size;
      },
    })`
      color: palevioletred;
      font-size: 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
      margin: ${props => props.margin};
      padding: ${props => props.padding};
    `;

    const AttrsInputExtra = styled<_, _>(AttrsInput).attrs<{|
      autoComplete: string,
    |}>(props => ({ autoComplete: 'off' }))``;

    // $FlowExpectedError[incompatible-use]
    const test1 = <AttrsInputExtra size="2em" autoComplete={1} type={1} />; // error
    const test2 = <AttrsInputExtra size="2em" autoComplete="on" type="text" />; // ok
    // $FlowExpectedError[incompatible-use]
    const test3 = <AttrsInputExtra size="2em" type={1} />; // error
  });

  it('should destructure a prop, as a function within styled(Component)', () => {
    const Div = ({ ...rest }) => <div {...rest} />;

    const StyledDiv: StyledComponent<{ color: string, ... }, any, any> = styled(Div)(({ color }) => `
      color: ${color};
    `);

    const test = <StyledDiv color="#000">Test</StyledDiv>
  })
});

// @NOTE: Not sure how to better test this
describe('createGlobalStyle & GlobalStyles', () => {
  it('can be created and rendered', () => {
    const GlobalStyles: React.ComponentType<any> = createGlobalStyle``;

    const App = () => (
      <div>
        <GlobalStyles />
      </div>
    );
  });
});

describe('ThemeContext', () => {
  type MyTheme = {|
    primaryColor: string,
  |};

  it('allows refining the theme', () => {
    const theme = React.useContext<MyTheme>(ThemeContext);

    theme.primaryColor;
  });

  it('typechecks the theme', () => {
    const theme = React.useContext<MyTheme>(ThemeContext);

    // $FlowExpectedError[prop-missing]
    theme.primaryColot;
  });

  it('allows aliasing the context with the Theme refined', () => {
    const MyThemeContext: React.Context<MyTheme> = ThemeContext;
    const theme = React.useContext(MyThemeContext);

    theme.primaryColor;

    // $FlowExpectedError[prop-missing]
    theme.primaryColot;
  });
});

describe('css generator', () => {
  it('can be used', () => {
    const styles: CSSRules = css`
      color: pink;
    `;
  });

  it('accepts strings', () => {
    const str = 'pink';

    const styles = css`
      color: ${str};
    `;
  });

  it('accepts functions', () => {
    const fun = (): string => 'pink';

    const styles = css`
      color: ${fun};
    `;
  });

  it('accepts void/undefined', () => {
    const styles = css`
      ${undefined};
    `;
  });

  it('accepts false', () => {
    const styles = css`
      ${false};
    `;
  });

  // Technically styled-components _does_ accept true, _but_ it usually generates wrong/nonsensical and unexpected output.
  it("doesn't accept true", () => {
    // $FlowExpectedError[incompatible-call] - lies!
    const styles = css`
      ${true};
    `;
  });

  it('accepts null', () => {
    const styles = css`
      ${null};
    `;
  });

  it('accepts style objects', () => {
    const styles = css`
      ${{
        color: 'red',
      }};
    `;
  });

  it("doesn't accept exotic/non-style objects", () => {
    // $FlowExpectedError[incompatible-call] - don't accept non-style objects
    const styles = css`
      ${{ fun: () => null }};
    `;
  });

  it('accepts feyframes', () => {
    const anim = keyframes`
      from {}
      to {}
    `;

    const styles = css`
      animation: ${anim};
    `;
  });

  it('it accepts CSSRules', () => {
    const additonalStyles = css`
      background: ${'salmon'};
    `;

    const styles = css`
      color: maroon;
      ${additonalStyles};
    `;
  });

  it('accepts styled-components in interpolations', () => {
    const SComp1 = styled.div``;

    const SComp2 = styled.div`
      ${SComp1} {
        color: pink;
      }
    `;
  });

  it("doen't accept any component in interpolations", () => {
    class ClassComp extends React.Component<{ ... }> {
      render() {
        return null;
      }
    }

    const FuncComp: React.ComponentType<any> = () => null;

    // $FlowExpectedError[incompatible-call] - we don't know how to interpolate non-styled-components components
    const SComp1 = styled.div`
      ${ClassComp} {
        color: pink;
      }
    `;

    // $FlowExpectedError[incompatible-call] - we don't know how to interpolate non-styled-components components
    const SComp2 = styled.div`
      ${FuncComp} {
        color: pink;
      }
    `;
  });
});

// @NOTE: Not sure how to better test this
describe('keyframes generator', () => {
  it('can be created', () => {
    const animation: KeyFrames = keyframes``;
  });
});

describe('refs', () => {
  it('correctly detects the component type', () => {
    const ref1: { current: HTMLInputElement | null, ... } = React.createRef();
    const Input = styled.input``;
    const input = <Input ref={ref1} />;
  });

  it('errors on wrong component type', () => {
    const ref1: { current: HTMLInputElement | null, ... } = React.createRef();
    const Section = styled.section``;
    // $FlowExpectedError[incompatible-use] - Complain about HTMLElement not being compatible wiht HTMLInputElement
    const section = <Section ref={ref1} />;
  });

  // Commented this test, because it also generates an error on line 21
  // When the reference type is wrong.
  // I think because Flow is trying to some inference craziness
  // it('errors on wrong component type', () => {
  //   const ref1: {current: HTMLInputElement | null} = React.createRef()
  //   const Span = styled.span``

  // Used £ instead of $ so it doesn't trigger suppression warnings
  //   // £ExpectError - Complain about HTMLSpanElement not being compatible with HTMLInputElement
  //   const span = <Span ref={ref1} />
  // })
});

describe('withTheme', () => {
  type Theme = { accent: string, ... };

  type Props = {
    ownProp: string,
    theme: Theme,
    ...
  };

  // Explicit annotation until we see what happens to https://github.com/facebook/flow/issues/7774
  // This appears to be a regression in flow
  const MyComp: React.ComponentType<Props> = (props: Props) => (
    <div>{props.ownProp}</div>
  );

  const MyCompWT = withTheme(MyComp);
  // $FlowExpectedError[incompatible-call] - wrong prop
  const MyCompWT2 = withTheme(MyCompWT);

  it("doesn't interfere with component's own props", () => {
    // $FlowExpectedError[incompatible-type] - wrong prop
    const mcwt2 = <MyCompWT ownProp={0} />;
  });

  it("errors when theme should be there but isn't", () => {
    // $FlowExpectedError[prop-missing] - missing theme prop
    const mc = <MyComp ownProp="own prop" />;
  });

  it('detects theme is passed in', () => {
    const mcwt = <MyCompWT ownProp="own prop" />;
  });

  // I think this is no longer relevant probably, since Flow has
  // deprecated $Supertype and $Subtype, but it can't hurt to have them
  it('preserves props when wrapped in two HOCs', () => {
    const mcwt1 = <MyCompWT2 ownProp="own prop" />;

    const mcwt2 = <MyCompWT2 ownProp={0} />;
  });
});

describe('useTheme', () => {
  type Theme1 = {|
    accent: string,
  |};

  type Theme2 = {|
    primary: string,
  |};

  it('returns Theme', () => {
    const theme1: Theme1 = useTheme<Theme1>();

    // $FlowExpectedError[prop-missing] - Theme1 !== Theme2
    const theme2: Theme2 = useTheme<Theme1>();
  });
});

describe('wrapping components', () => {
  type Props = {|
    name: string,
  |};

  type StyleProps = {|
    ...Props,
    color?: string,
  |};

  type Theme = { accent: string, ... };

  const Hello: React.ComponentType<Props> = (p: Props) => (
    <div>Hello {p.name}</div>
  );

  const StyledHello = styled<_, Theme, StyleProps>(Hello)`
    color: ${props => props.color || props.theme.accent};
  `;

  it('understands props that the wrapped component wants', () => {
    const hello1 = <StyledHello name="World" />;
    const hello2 = <StyledHello name="World" color="maroon" />;

    // $FlowExpectedError[incompatible-use] - Invalid prop type
    const hello3 = <StyledHello name={3} />;
  });

  // defaultProps doesn't work with React.AbstractComponent "by design"
  // see https://github.com/flow-typed/flow-typed/pull/3228#issuecomment-509016680
  // and the linked issue for a slightly longer explanation
  // it('allows default props to be defined', () => {
  //   StyledHello.defaultProps = {
  //     name: "me"
  //   }
  // })
});
