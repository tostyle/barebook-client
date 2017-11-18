import React from 'react'
import styled from 'styled-components'
import YellowBtn from './YellowBtn/YellowBtn'

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
    top: 100px;
  }
  button {
    position: relative;
    top: 200px;
  }
`

const Banner = () =>
  <Body>
    <div>Make a book out of your dream.</div>
    <YellowBtn text={'สร้างความฝันของคุณ'} />
  </Body>

export default Banner
