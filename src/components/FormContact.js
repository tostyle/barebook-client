import React from 'react'
import styled from 'styled-components'
import YellowBtn from './YellowBtn/YellowBtn'
import YellowTextInput from './YellowTextInput/YellowTextInput'
import YellowTextarea from './YellowTextarea/YellowTextarea'

const Body = styled.div`
  text-align: center;
  margin-top: 50px;
`

const Title = styled.div`
  text-align: center;
  color: black;
  font-size: 32px;
  font-weight: bold;
`

const Form = styled.div`
  max-width: 540px;
  width: 540px;
  margin: 20px auto;
`

export default () =>
  <Body>
    <Title>ส่งข้อความถึง The BareBook</Title>
    <Form>
      <YellowTextInput ph="ชื่อ" />
      <YellowTextInput ph="อีเมล" />
      <YellowTextInput ph="หัวข้อ" />
      <YellowTextarea ph="มีอะไรให้ เดอะ แบร์บุ๊ค ช่วย แจ้งได้เลย" />
    </Form>
    <YellowBtn text={'ส่งข้อมูล'} />
  </Body>
