import React from 'react'
import styled from 'styled-components'
import TypeATumb from './customspage/TypeATumb'

const Body = styled.div`
  margin: 80px;
  display: flex;
  position: relative;
  text-align: center;
`

const PageLayout3 = () =>
  <Body>
    <TypeATumb />
    <TypeATumb />
    <TypeATumb />
  </Body>

export default PageLayout3
