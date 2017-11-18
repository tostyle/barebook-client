import React from 'react'
import styled from 'styled-components'
import LoginForm from '../src/components/LoginForm'

const Body = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
`

export default () =>
  <Body>
    <LoginForm />
  </Body>
