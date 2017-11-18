import React from 'react'
import styled from 'styled-components'
import TypeCTumb from './customspage/TypeCTumb'

const Body = styled.div`
  margin: 80px auto;
  display: block;
  position: relative;
  text-align: center;
  max-width: 84%;
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
  max-width: 100%;
`

const PageLayout5 = () =>
  <Body>
    <Head>What kind of book will you make?</Head>
    <div>
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
      <TypeCTumb />
    </div>
  </Body>

export default PageLayout5
