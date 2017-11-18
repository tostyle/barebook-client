import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: inline-block;
  position: relative;
  color: black;
  width: 420px;
  margin: 32px;
  text-align: center;
`
const Crop = styled.div`
  width: 64%;
  height: auto;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  padding-bottom: 64%;
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
  position: relative;
  top: 16px;
  font-size: 36px;
  font-weight: bold;
  width: 100%;
  text-align: center;
`

const Text = styled.div`
  position: relative;
  margin: 48px 0px;
  font-size: 16px;
  width: 100%;
  text-align: left;
`

const Button = styled.button`
  position: relative;
  margin-top: 24px;
  border: 3px solid #f9d24c;
  width: 80%;
  margin: auto;
  font-size: 28px;
  font-weight: bold;
  height: 72px;
  background-color: rgba(0, 0, 0, 0);
`

const TypeBTumb = () =>
  <Body>
    <Crop>
      <img src="http://via.placeholder.com/400x400" />
    </Crop>
    <Head>TEST</Head>
    <Text>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in
    </Text>
    <Button>ดูรูปทั้งหมด</Button>
  </Body>

export default TypeBTumb
