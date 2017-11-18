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
    white-space: normal;
    position: relative;
    top: 16px;
    font-size: 16px;
    width: 100%;
  }
`

const TypeATumb = () =>
  <Body>
    <img src="http://via.placeholder.com/400x300" />
    <div>TEST</div>
    <p>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in
    </p>
  </Body>

export default TypeATumb
