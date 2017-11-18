import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: 48px;
  width: 80%;
  text-align: center;
  padding: 50px 0;
  margin: 20px auto;
  > div {
    display: inline-block;
  }
`

const Right = styled.div`width: 20%;`

const Left = styled.div`width: 20%;`

const Center = styled.div`width: 60%;`

const Crop = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: auto;
  padding-bottom: 100%;
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

const SelectType = () =>
  <Body>
    <Left />
    <Center>
      <Crop>
        <img src="http://via.placeholder.com/400x400" />
      </Crop>
    </Center>
    <Right />
  </Body>

export default SelectType
