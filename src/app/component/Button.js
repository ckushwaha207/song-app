import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 1rem;
  max-width: 11rem;
  background: teal;
  color: white;
  &:hover {
    opacity: 0.7;
  }
`

export default function CustomButton (props) {
  return (
    <React.Fragment>
      <Button onClick={props.onClick}>Search</Button>
    </React.Fragment>
  )
}
