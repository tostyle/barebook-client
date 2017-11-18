import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  position: relative;
  color: black;
  padding: 24px 8px;
`

const Crop = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: auto;
  padding-bottom: 80%;
  text-align: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`

const Button = styled.button`
  position: relative;
  border: 3px solid #f9d24c;
  width: 100%;
  margin: auto;
  font-size: 28px;
  font-weight: bold;
  height: 84px;
  background-color: rgba(0, 0, 0, 0);
`

const TypeCTumb = () =>
  <Body>
    <Crop>
      <img src="http://via.placeholder.com/400x400" />
    </Crop>
    <Button>TEST</Button>
  </Body>

export default TypeCTumb
