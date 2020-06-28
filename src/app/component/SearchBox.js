import React from 'react'
import styled from 'styled-components'

const SearchBox = styled.input`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0.3em;
  margin: 0.5rem 0rem;
  min-width: 11rem;
  background: #fff;
  color: grey;
  border: 1px solid teal;
  &:focus {
  }
`

export default function SearchInput (props) {
  const { placeholder, type, value, onChange } = props
  return (
    <React.Fragment>
      <SearchBox 
        placeholder={placeholder} 
        type={type} 
        value={value} 
        onChange={onChange} 
      />
    </React.Fragment>
  )
}
