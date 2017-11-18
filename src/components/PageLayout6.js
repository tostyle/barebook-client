import React from 'react'
import styled from 'styled-components'
import YellowBtn from './YellowBtn/YellowBtn'

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
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 66%;
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

const Text = styled.div`
  position: relative;
  margin: 48px 0px;
  font-size: 16px;
  width: 100%;
  text-align: left;
`

const PageLayout6 = () =>
  <Body>
    <Left>
      <Crop>
        <img src="http://via.placeholder.com/300x200" />
      </Crop>
    </Left>
    <Cen />
    <Right>
      <Head>What kind of book will you make?</Head>
      <Text>
        ไม่รักไม่ต้องมาแคร์ไม่ต้องมาดีกับฉัน
        ไม่รัไบม่ต้องมาหวงไม่ต้องมาห่วงใยฉัน ไม่รักไม่ต้องมาทำอะไรอะไรทั้งนั้น
        เพราะใจฉันยังอ่อนแอ
      </Text>
      <YellowBtn text={'test'} />
    </Right>
  </Body>

export default PageLayout6
