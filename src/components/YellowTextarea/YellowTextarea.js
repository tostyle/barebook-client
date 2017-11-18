import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputArea = styled.textarea`
  display: block;
  border: solid 3.3px #f7d34c;
  outline: none;
  height: 350px;
  line-height: 28px;
  font-size: 18px;
  width: 100%;
  color: black;
  margin: 8px 0px;
  padding: 8px 16px;
  &::placeholder {
    color: black;
  }
`

const YellowTextarea = ({ ph }) => <InputArea placeholder={ph} />

YellowTextarea.propTypes = {
  ph: PropTypes.string,
}

YellowTextarea.defaultProps = {
  ph: '...',
}

export default YellowTextarea
