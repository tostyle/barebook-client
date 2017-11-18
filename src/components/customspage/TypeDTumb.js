import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  position: relative;
  color: black;
  padding: 24px 32px;
`

const Crop = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: auto;
  padding-bottom: 90%;
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

const Head = styled.div`
  display: block;
  text-align: Left;
  font-size: 28px;
`

const Text = styled.div`
  position: relative;
  margin: 8px 0px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  font-weight: Lighter;
`

const NameDate = styled.div`
  position: relative;
  margin: 8px 0;
  font-size: 16px;
  width: 100%;
  text-align: left;
  font-weight: Lighter;
  color: #b5b5b5;
`

const TypeDTumb = () =>
  <Body>
    <Crop>
      <img src="http://via.placeholder.com/400x400" />
    </Crop>
    <NameDate>Blogname | Date</NameDate>
    <Head>BLOG TITLE</Head>
    <Text>
      ไม่รักไม่ต้องมาแคร์ไม่ต้องมาดีกับฉัน ไม่รัไบม่ต้องมาหวงไม่ต้องมาห่วงใยฉัน
      ไม่รักไม่ต้องมาทำอะไรอะไรทั้งนั้น เพราะใจฉันยังอ่อนแอ
    </Text>
  </Body>

export default TypeDTumb
