// @flow
import * as React from 'react'
import styled from 'styled-components'

// Test that we can wrap a functional component

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

const hello1 : React.Element<typeof Hello> = <StyledHello name="World" />

// $ExpectError - Invalid prop type
const hello2 : React.Element<typeof Hello> = <StyledHello name={3} />
