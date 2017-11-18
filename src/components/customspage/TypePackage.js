import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: inline-block;
  position: relative;
  color: black;
  width: 420px;
  margin: 32px;
  img {
    width: 100%;
  }
  div {
    position: relative;
    top: 16px;
    font-size: 36px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  p {
    text-align: left;
    white-space: normal;
    position: relative;
    top: 16px;
    font-size: 16px;
    width: 100%;
  }
`

const TypeATumb = ({ data: { id, title, detail, link } }) =>
  <Body>
    <img src="http://via.placeholder.com/400x300" />
    <div>
      {title}
    </div>
    <p>
      {detail}
    </p>
  </Body>

export default TypeATumb
