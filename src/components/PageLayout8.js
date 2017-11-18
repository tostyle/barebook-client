import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: block;
  position: relative;
  background-color: #a6a6a6;
  width: 100%;
  height: 400px;
  text-align: center;
  padding: 50px 0;
  div {
    position: relative;
    color: black;
    font-size: 56px;
    font-weight: bold;
    top: 170px;
  }
`

const PageLayout8 = ({ text }) =>
  <Body>
    <div>
      {text}
    </div>
  </Body>

export default PageLayout8
