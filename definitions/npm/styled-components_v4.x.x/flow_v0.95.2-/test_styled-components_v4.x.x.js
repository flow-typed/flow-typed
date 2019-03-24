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


describe('styled', () => {
  it('should map to correct element', () => {
    const Span1: StyledComponent<*, *, *> = styled.span``
    const Span2: StyledComponent<{}, {}, HTMLSpanElement> = styled('span')``

    const Span3 = styled.span``
    const Span4 = styled('span')``
  })

  it('should\'t map incorrectly', () => {
    // $ExpectError - Wrong component type, should be Div
    const Div1: StyledComponent<{}, {}, HTMLSpanElement> = styled.div``
    // $ExpectError - Wrong component type, should be Div
    const Div2: StyledComponent<{}, {}, HTMLSpanElement> = styled('div')``
  })

  it('renders as the correct element', () => {
    const Span: StyledComponent<{}, {}, HTMLSpanElement> = styled.span``
    const Div: StyledComponent<{}, {}, HTMLDivElement> = styled('div')``

    const span1: React.Element<React.AbstractComponent<{}, HTMLSpanElement>> = <Span />

    // $ExpectError - Should be HTMLDivElement
    const div1: React.Element<React.AbstractComponent<{}, HTMLSpanElement>> = <Div />
  })

  it('shouldn\'t create invalid elements', () => {
    // $ExpectError - test for non-existent element
    const derp1 = styled.derp``

    // $ExpectError - test for non-existent element
    const derp2 = styled('derp')``
  })

  it('shouldn\'t style something impossible', () => {
    // $ExpectError
    const derp1 = styled(null)``

    // $ExpectError
    const derp2 = styled({})``

    // $ExpectError
    const derp3 = styled(1)``
  })

  it('should validate props', () => {
    const Span: StyledComponent<{color: string}, *, *> = styled.span`
      color: ${props => props.color};
    `

    // $ExpectError - background is not in props
    const Span2: StyledComponent<{color: string}, *, *> = styled.span`
      background: ${props => props.background};
    `

    const Span3: StyledComponent<{color: string}, {accent: string}, *> = styled.span`
      color: ${props => props.theme.accent};
    `

    const span1 = <Span color="pink" />
    const span2 = <Span2 color="pink" background="maroon" />
    const span3 = <Span3 color="pink" background="maroon" />
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


// @NOTE: Not sure how to better test this
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