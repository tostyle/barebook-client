import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  margin: 48px auto;
  width: 80%;
  display: table;
  table-layout: fixed;
  position: relative;
  text-align: Left;
  > div {
    display: table-cell;
  }
`

const Left = styled.div`
  position: relative;
  width: 60%;
`

const Crop = styled.div`
  width: 36%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  padding-bottom: 35%;
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

const Right = styled.div`
  vertical-align: middle;
  position: relative;
  width: 35%;
`

const Cen = styled.div`
  position: relative;
  width: 5%;
`

const Head = styled.div`
  display: block;
  text-align: Left;
  font-size: 32px;
  font-weight: bold;
`

const Text = styled.p`
  position: relative;
  margin: 48px 0px;
  font-size: 16px;
  width: 100%;
  text-align: left;
`

const PageLayout10 = () =>
  <Body>
    <Left>
      <Crop>
        <img src="http://via.placeholder.com/300x300" />
      </Crop>
    </Left>
    <Cen />
    <Right>
      <Head>TheBareBook Co.,LTD</Head>
      <Text>address</Text>
      <Text>tel: 0000000</Text>
      <Text>e-mail:</Text>
    </Right>
  </Body>

export default PageLayout10
