// @flow
import { describe, it } from 'flow-typed-test'

import * as React from 'react'
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  // withTheme,

  type CSSRules,
  type KeyFrames,
  // type Theme,

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
    // $ExpectError - background is not in props
    const Span: StyledComponent<{color: string}, *, *> = styled.span`
      color: ${props => props.background};
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