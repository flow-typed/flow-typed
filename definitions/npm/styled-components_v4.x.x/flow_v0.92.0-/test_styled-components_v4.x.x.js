// @flow
import { describe, it } from 'flow-typed-test'

import * as React from 'react'
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  withTheme,

  type CSSRules,
  type KeyFrames,

  type StyledComponent,
} from 'styled-components'


describe('styled builtins', () => {
  it('should map to correct element', () => {
    const Span1: StyledComponent<{}, {}, HTMLSpanElement> = styled.span``
    const Div1: StyledComponent<{}, {}, HTMLDivElement> = styled.div``

    const Span2: StyledComponent<{}, {}, HTMLSpanElement> = styled('span')``
    const Div2: StyledComponent<{}, {}, HTMLDivElement> = styled('div')``
  })

  it('should not map to incorrect element', () => {
    // $ExpectError - should be HTMLSpanElement
    const Span1: StyledComponent<{}, {}, HTMLDivElement> = styled.span``

    // $ExpectError - should be HTMLDivElement
    const Div1: StyledComponent<{}, {}, HTMLSpanElement> = styled.div``

    // $ExpectError - Should be HTMLSpanElement
    const Span2: StyledComponent<{}, {}, HTMLDivElement> = styled('span')``

    // $ExpectError - should be HTMLDivElement
    const Div2: StyledComponent<{}, {}, HTMLSpanElement> = styled('div')``
  })

  it('should render as the correct element', () => {
    const Span: StyledComponent<{}, {}, HTMLSpanElement> = styled.span``
    const Div: StyledComponent<{}, {}, HTMLDivElement> = styled.div``

    const span1: React.Element<React.AbstractComponent<{}, HTMLSpanElement>> = <Span />

    // $ExpectError - should be HTMLDivElement
    const div1: React.Element<React.AbstractComponent<{}, HTMLSpanElement>> = <Div />
  })


  it('shouldn\'t style something impossible', () => {
    // $ExpectError
    const derp1 = styled(null)``

    // $ExpectError
    const derp2 = styled({})``

    // $ExpectError
    const derp3 = styled(1)``

    // $ExpectError
    const derp4 = styled.derp``

    // $ExpectError
    const derp5 = styled('derp')``
  })

  it('should accept style props', () => {
    const Span: StyledComponent<{color: string}, *, *> = styled.span`
      color: ${props => props.color};
    `

    const span1 = <Span color="maroon" />

    const Div: StyledComponent<{color: string, background?: string}, *, *> = styled.div`
      color: ${props => props.color};
    `

    const div1 = <Div color="maroon" />
    const div2 = <Div color="maroon" background="salmon" />
  })

  it('should respect strict props', () => {
    // {| ... |} breaks syntax highlighting in vs code
    // if all on one line, so put here instead of inlined
    type Props = {|
      color?: string
    |}

    const Span: StyledComponent<Props, *, *> = styled.span`
      color: ${props => props.color || 'pink'};
    `

    // $ExpectError - typo; someone used the British spelling by accident
    const span1 = <Span colour="maroon" />
  })

  it('should validate template props', () => {
    const Span: StyledComponent<{color: string}, *, *> = styled.span`
      color: ${
      // $ExpectError - background is not in props
      props => props.background
      };
    `
  })

  it('should reject wrong interpolation output', () => {
    // $ExpectError - shouldn't return undefined from interpolation function
    const Span: StyledComponent<{color?: string}, *, *> = styled.span`
      color: ${props => props.color};
    `
  })

  it('should inject theme', () => {
    const Span: StyledComponent<{color?: string}, {accent: string}, *> = styled.span`
      color: ${props => props.color || props.theme.accent};
    `
  })

  it('should validate theme', () => {
    // $ExpectError - oops, someone meant accent, not primary
    const Span: StyledComponent<{color?: string}, {accent: string}, *> = styled.span`
      color: ${props => props.color || props.theme.primary};
    `
  })

})

// @NOTE: Not sure how to better test this
describe('createGlobalStyle & GlobalStyles', () => {
  it('can be created and rendered', () => {
    const GlobalStyles: React.ComponentType<*> = createGlobalStyle``

    const App = () =>
      <div>
        <GlobalStyles />
      </div>
  })
})

describe('css generator', () => {
  it('can be used', () => {
    const styles: CSSRules = css`
      color: pink;
    `
  })

  it('accepts strings', () => {
    const str = 'pink'

    const styles = css`
      color: ${str};
    `
  })

  it('accepts functions', () => {
    const fun = () => 'pink'

    const styles = css`
      color: ${fun};
    `
  })

  it('accepts feyframes', () => {
    const anim = keyframes`
      from {}
      to {}
    `

    const styles = css`
      animation: ${anim};
    `
  })

  it('it accepts CSSRules', () => {
    const additonalStyles = css`
      background: ${'salmon'};
    `

    const styles = css`
      color: maroon;
      ${additonalStyles};
    `
  })

  it('accepts styled-components in interpolations', () => {
    const SComp1 = styled.div``

    const SComp2 = styled.div`
      ${SComp1} {
        color: pink;
      }
    `
  })

  it('doen\'t accept any component in interpolations', () => {
    class ClassComp extends React.Component<{}> {
      render() {
        return null
      }
    }

    const FuncComp: React.ComponentType<*> = () => null

    // $ExpectError - we don't know how to interpolate non-styled-components components
    const SComp1 = styled.div`
      ${ClassComp} {
        color: pink;
      }
    `

    // $ExpectError - we don't know how to interpolate non-styled-components components
    const SComp2 = styled.div`
      ${FuncComp} {
        color: pink;
      }
    `
  })

  it('doesn\'t accept objects', () => {
    const obj = {}

    // $ExpectError - object is not a valid inerpolation
    const styles = css`
      color: ${obj};
    `
  })

  it('doesn\'t accept void/undefined', () => {
    // $ExpectError - object is not a valid inerpolation
    const styles = css`
      color: ${undefined};
    `
  })

  it('doesn\'t accept null', () => {
    // $ExpectError - object is not a valid inerpolation
    const styles = css`
      color: ${null};
    `
  })
})

// @NOTE: Not sure how to better test this
describe('keyframes generator', () => {
  it('can be created', () => {
    const animation: KeyFrames = keyframes``
  })
})

describe('refs', () => {
  it('correctly detects the component type', () => {
    const ref1: {current: HTMLInputElement | null} = React.createRef()
    const Input = styled.input``
    const input = <Input ref={ref1} />
  })

  it('errors on wrong component type', () => {
    const ref1: {current: HTMLInputElement | null} = React.createRef()
    const Section = styled.section``
    // $ExpectError - Complain about HTMLElement not being compatible wiht HTMLInputElement
    const section = <Section ref={ref1} />
  })

  // Commented this test, because it also generates an error on line 21
  // When the reference type is wrong.
  // I think because Flow is trying to some inference crazyness
  // it('errors on wrong component type', () => {
  //   const ref1: {current: HTMLInputElement | null} = React.createRef()
  //   const Span = styled.span``

  // Used £ instead of $ so it doesn't trigger supression warnings
  //   // £ExpectError - Complain about HTMLSpanElement not being compatible wiht HTMLInputElement
  //   const span = <Span ref={ref1} />
  // })
})

describe('withTheme', () => {
  type Theme = {
    accent: string
  }

  type Props = {
    ownProp : string,
    theme : Theme
  }

  // Explicit annotation until we see what happens to https://github.com/facebook/flow/issues/7774
  // This appears to be a regression in flow
  const MyComp: React.ComponentType<Props> = (props: Props) =>
    <div>
      {props.ownProp}
    </div>

  const MyCompWT = withTheme(MyComp)
  const MyCompWT2 = withTheme(MyCompWT)

  it('doesn\'t interfere with component\'s own props', () => {
    // $ExpectError - wrong prop
    const mcwt2 = <MyCompWT ownProp={0} />
  })

  it('errors when theme should be there but isn\'t', () => {
    // $ExpectError - missing theme prop
    const mc = <MyComp ownProp="own prop" />
  })


  it('detects theme is passed in', () => {
    const mcwt = <MyCompWT ownProp="own prop" />
  })

  // I think this is no longer relevant probably, since Flow has
  // deperacted $Supertype and $Subtype, but it can't hurt to have them
  it('preserves props when wrapped in two HOCs', () => {
    const mcwt1 = <MyCompWT2 ownProp="own prop" />

    // $ExpectError - wrong prop
    const mcwt2 = <MyCompWT2 ownProp={0} />
  })
})


describe('wrapping components', () => {
  type Props = {|
    name : string
  |}

  type StyleProps = {|
    ...Props,
    color?: string
  |}

  type Theme = {
    accent: string
  }

  const Hello: React.ComponentType<Props> = (p: Props) =>
    <div>Hello {p.name}</div>

  const StyledHello = styled<StyleProps, Theme, Props, *>(Hello)`
    color: ${props => props.color || props.theme.accent};
  `

  it('understands props that the wrapped component wants', () => {
    const hello1 = <StyledHello name="World" />
    const hello2 = <StyledHello name="World" color="maroon" />

    // $ExpectError - Invalid prop type
    const hello3 = <StyledHello name={3} />
  })

  // defaultProps doesn't work with React.AbstractComponent "by design"
  // see https://github.com/flow-typed/flow-typed/pull/3228#issuecomment-509016680
  // and the linked issue for a slightly longer explanation
  // it('allows default props to be defined', () => {
  //   StyledHello.defaultProps = {
  //     name: "me"
  //   }
  // })
})
