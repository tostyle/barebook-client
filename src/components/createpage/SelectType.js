import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  font-size: 48px;
  width: 900px;
  height: 60px;
  text-align: center;
  padding: 50px 0;
  margin: auto;
  > div {
    margin: 0 auto;
  }
`

const DDLink = styled.div`
  > div {
    margin: 0 auto;
  }
  color: #ebcc58;
`

const SelectType = () =>
  <Body>
    <div>เริ่มทำ</div>
    <DDLink>โปรเจค</DDLink>
    <div>เล่มนี้ให้เป็น</div>
    <DDLink>ความทรงจำที่ดี</DDLink>
  </Body>

export default SelectType
