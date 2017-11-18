import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  > div {
    display: block;
    position: relative;
  }
`

const Layout = props =>
  <Body>
    <Header />
    {props.children}
    <Footer />
  </Body>

export default Layout
