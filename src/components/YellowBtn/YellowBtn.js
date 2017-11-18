import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = styled.button`
  position: relative;
  background-color: #efcd38;
  text-align: center;
  padding: ${props => (props.size === 'mini' ? '4px 16px' : '16px 56px')};
  color: black;
  font-size: ${props => (props.size === 'mini' ? '16px' : '32px')};
  font-weight: bold;
  border: none;
  border-radius: 0px;
`

const YellowBtn = ({ text, size }) =>
  <Button size={size}>
    {text}
  </Button>

YellowBtn.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

YellowBtn.defaultProps = {
  text: 'ส่ง prop.text มาด้วย',
  size: 'normal',
}

export default YellowBtn
