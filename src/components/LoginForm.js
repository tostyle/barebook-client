import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import YellowBtn from './YellowBtn/YellowBtn'
import YellowTextInput from './YellowTextInput/YellowTextInput'

const Body = styled.div`
  margin: 120px auto;
  width: 360px;
  position: relative;
`
const ConForm = styled.form``

const Head = styled.div`
  font-size: 48px;
  font-weight: bold;
`

const ConBottomRight = styled.div`
  text-align: right;
  float: right;
  > button {
    margin: 8px 0;
  }
  a {
    font-size: 10px;
    color: black;
  }
  div {
    line-height: 0.8;
  }
`

const ConBottomLeft = styled.div`
  float: left;
  /* Base for label styling */
  [type="checkbox"]:not(:checked),
  [type="checkbox"]:checked {
    position: absolute;
    left: -9999px;
  }
  [type="checkbox"]:not(:checked) + label,
  [type="checkbox"]:checked + label {
    position: relative;
    padding-left: 1.95em;
    cursor: pointer;
  }
  /* checkbox aspect */
  [type="checkbox"]:not(:checked) + label:before,
  [type="checkbox"]:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 1.25em;
    height: 1.25em;
    border: 2px solid #efcd38;
    background: #fff;
    border-radius: 50%;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1);
  }
  /* checked mark aspect */
  [type="checkbox"]:not(:checked) + label:after,
  [type="checkbox"]:checked + label:after {
    content: '✔';
    position: absolute;
    top: .1em;
    left: .3em;
    font-size: 1.3em;
    line-height: 0.8;
    color: #ccc;
    transition: all .2s;
  }
  /* checked mark aspect changes */
  [type="checkbox"]:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  [type="checkbox"]:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`

export default () =>
  <Body>
    <ConForm>
      <Head>เข้าสู่ระบบ</Head>
      <br />
      <br />
      <YellowTextInput ph="อีเมล" />
      <YellowTextInput ph="รหัสผ่าน" typ="password" />
      <ConBottomLeft>
        <input type="checkbox" id="test1" />
        <label for="test1">จดจำรหัส</label>
      </ConBottomLeft>
      <ConBottomRight>
        <YellowBtn text="เข้าสู่ระบบ" size="mini" />
        <div>
          <Link href="/">
            <a>ลืมรหัสผ่าน</a>
          </Link>
        </div>
        <div>
          <Link href="/regis">
            <a>สร้างบัญชีใหม่</a>
          </Link>
        </div>
      </ConBottomRight>
    </ConForm>
  </Body>
