// @flow
import { describe, it } from 'flow-typed-test'

import * as React from 'react'
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  withTheme,

  type StyledElementType,
  type CSSRules,
  type KeyFrames,
  type Theme
} from 'styled-components'


describe('styled', () => {
  it('should map to correct element', () => {
    const Span1 : StyledElementType<'span'> = styled.span``
    const Span2 : StyledElementType<'span'> = styled('span')``
  })

  it('should\'t map incorrectly', () => {
    // $ExpectError - Wrong component type
    const Div1 : StyledElementType<'span'> = styled.div``
    // $ExpectError - Wrong component type
    const Div2 : StyledElementType<'span'> = styled('div')``
  })

  it('renders as the correct element', () => {
    const Span1 : StyledElementType<'span'> = styled.span``
    const Span2 : StyledElementType<'span'> = styled('span')``
    const Div : StyledElementType<'div'> = styled('div')``

    const span1 : React.Element<'span'> = <Span1 />
    const span2 : React.Element<'span'> = <Span2 />

    // $ExpectError - Wrong element type
    const div3 : React.Element<'span'> = <Div />
  })

  it('shouldn\'t create invalid elements', () => {
    // $ExpectError - test for non-existent element
    const derp1 = styled.derp``

    // $ExpectError - test for non-existent element
    const derp2 = styled('derp')``
  })

  it('shouldn\'t style something impossible', () => {
    // $ExpectError
    const derp3 = styled(null)``

    // $ExpectError
    const derp3 = styled({})``

    // $ExpectError
    const derp3 = styled(1)``
  })
})

// @NOTE: Not sure how to better test this
describe('createGlobalStyle & GlobalStyles', () => {
  it('can be created and rendered', () => {
    const GlobalStyles : React.ComponentType<*> = createGlobalStyle``

    const App = () =>
      <div>
        <GlobalStyles />
      </div>
  })
})

// @NOTE: Not sure how to better test this
describe('css generator', () => {
  it('can be used', () => {
    const styles : CSSRules = css`
      color: pink;
    `
  })

  it('accepts strings', () => {
    const styles = css(['color: ', ';'], 'pink')
  })

  it('accepts functions', () => {
    const styles = css(['color: ', ';'], () => 'salmon')
  })

  it('accepts Keyframes', () => {
    const anim = keyframes`
      from {}
      to {}
    `

    const styles = css(['animation: ', ';'], anim)
  })

  it('it accepts CSSRules', () => {
    const additonalStyles = css`
      background: ${'pink'};
    `

    const styles = css(['color: ', ';'], 'pink', additonalStyles)
  })

  it('doesn\'t accept objects', () => {
    // $ExpectError - object is not a valid inerpolation
    const styles = css(['color: ', ';'], {})

    // @NOTE This should error too, but I guess flow doesn't yet understand how template literals expand
    const styles2 = css`
      color: ${{}};
    `
  })
})

// @NOTE: Not sure how to better test this
describe('keyframes generator', () => {
  it('can be created', () => {
    const animation : KeyFrames = keyframes``
  })
})


describe('refs', () => {
  it('correctly detects the component type', () => {
    const ref1 : { current : HTMLInputElement | null } = React.createRef()
    const Input = styled.input``
    const input = <Input ref={ref1} />
  })

  it('errors on wrong component type', () => {
    const ref1 : { current : HTMLInputElement | null } = React.createRef()
    const Span = styled.span``
    // $ExpectError - Complain about HTMLSpanElement not being compatible wiht HTMLInputElement
    const span = <Span ref={ref1} />
  })
})

describe('withTheme', () => {
  type Props = {
    ownProp : string,
    theme : Theme
  }

  const MyComp = (props : Props) =>
    <div>
      {props.ownProp}
    </div>

  const MyCompWT = withTheme(MyComp)

  it('doesn\'t interfere with component\'s own props', () => {
    // $ExpectError - wrong prop
    const mcwt2 = <MyCompWT ownProp={0} />
  })

  it('errors when theme should be there but isn\'t', () => {
    // $ExpectError - missing theme prop
    const mc = <MyComp ownProp="own prop" />
  })


  it('detects theme is passed in through context', () => {
    const mcwt = <MyCompWT ownProp="own prop" />
  })
})

describe('wrapping functional component', () => {
  type Props = { name : string }

  const Hello = (p : Props ) =>
    <div>Hello {p.name}</div>

  const StyledHello = styled(Hello)``

  it('understands props that the wrapped component wants', () => {
    const hello1 : React.Element<typeof Hello> = <StyledHello name="World" />

    // $ExpectError - Invalid prop type
    const hello2 : React.Element<typeof Hello> = <StyledHello name={3} />
  })
})

describe('wrapping class component', () => {
  type Props = { name : string }

  class Hello extends React.Component<Props> {
    render() {
      const { name } = this.props

      return (
        <div>Hello {name}</div>
      )
    }
  }

  const StyledHello = styled(Hello)``

  it('understands props that the wrapped component wants', () => {
    const hello1 : React.Element<typeof Hello> = <StyledHello name="World" />

    // $ExpectError - Invalid prop type
    const hello2 : React.Element<typeof Hello> = <StyledHello name={3} />
  })
})

describe('attrs API', () => {
  type Props = {
    name : string,
    what?: number // Random, I know.
  }

  const Hello = (p : Props) =>
    <div>Hello {p.name}</div>

  it('detects required props have been passed via attrs', () => {
    const StyledHello = styled(Hello).attrs({name: 'World'})``
    const hello = <StyledHello />
  })


  it('errors on invalid attributes', () => {
    // $ExpectError - number is not a string
    const StyledHello1 = styled(Hello).attrs({name: 10})``
    const hello1 = <StyledHello1 />

    // $ExpectError - string is not a number
    const StyledHello2 = styled(Hello).attrs({what: 'the heck', name: 'World'})``
    const hello2 = <StyledHello2 />
  })

  it('errors when props are missing', () => {
    const StyledHello = styled(Hello).attrs({})``

    // $ExpectError - name is missing in props
    const hello = <StyledHello />
  })
})
