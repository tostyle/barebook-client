import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Input = styled.input`
  display: block;
  border: solid 3.3px #f7d34c;
  outline: none;
  height: 32px;
  line-height: 28px;
  font-size: 18px;
  width: 100%;
  margin: 8px 0px;
  padding: 16px 16px;
  &::placeholder {
    color: black;
  }
`

const YellowTextInput = ({ ph, typ }) => <Input placeholder={ph} type={typ} />

YellowTextInput.propTypes = {
  ph: PropTypes.string,
  type: PropTypes.string,
}

YellowTextInput.defaultProps = {
  ph: '...',
  typ: 'text',
}

export default YellowTextInput
