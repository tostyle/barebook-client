import React from 'react'
import styled from 'styled-components'
import TypeDTumb from './customspage/TypeDTumb'

const Body = styled.div`
  margin: 80px auto;
  display: block;
  position: relative;
  text-align: center;
  width: 84%;
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > div {
      width: 25%;
      box-sizing: border-box;
    }
  }
`

const Head = styled.div`
  display: block;
  text-align: Left;
  font-size: 48px;
  font-wieght: bold;
`

const PageLayout7 = () =>
  <Body>
    <Head>Heigh-light Story</Head>
    <div>
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
      <TypeDTumb />
    </div>
  </Body>

export default PageLayout7
