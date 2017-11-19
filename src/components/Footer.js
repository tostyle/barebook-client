import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
  height: 400px;
  background: linear-gradient(to right, #efcd38, #e5ab4a);
  color: black;
  position: relative;
  padding: 40px 0px;
`
const First = styled.div`
  display: flex;
  > div {
    justify-content: space-between;
    /* display: inline-block; */
    max-width: 20%;
    margin: 0 64px;
  }
`
const Seccond = styled.div`
  position: relative;
  width: 100%;
  top: 40px;
  padding: 0 30px;
  > div {
    display: inline-block;
    width: 50%;
  }
`

const Head = styled.div`font-size: 40px;`
const Text = styled.div`
  margin-top: 32px;
  font-size: 18px;
  font-weight: lighter;
  > div {
    > a {
      text-decoration: none;
      color: black;
    }
  }
`

const Foot = styled.div`
  text-align: right;
  > div {
    font-size: 14px;
    font-weight: lighter;
    display: inline-block;
    width: 25%;
    text-align: right;
    overflow: visible;
    white-space: nowrap;
    > a {
      color: black;
      text-decoration: none;
    }
  }
`

const Footer = () =>
  <Body>
    <First>
      <div>
        <Head>Service</Head>
        <Text>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
        </Text>
      </div>

      <div>
        <Head>Service</Head>
        <Text>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
        </Text>
      </div>

      <div>
        <Head>Service</Head>
        <Text>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
        </Text>
      </div>

      <div>
        <Head>Service</Head>
        <Text>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
        </Text>
      </div>

      <div>
        <Head>Service</Head>
        <Text>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>Print On Demand</a>
            </Link>
          </div>
        </Text>
      </div>
    </First>
    <Seccond>
      <div />
      <Foot>
        <div>
          <Link href="/">
            <a>COMPANY PROFILE</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>JOIN BAREBOOK TEAM</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>PRICING CALCULATOR</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>TERM & CONDITION</a>
          </Link>
        </div>

        <div>
          <Link href="/">
            <a>CREATED BY METACOGNITIONS</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>©2017 BAREBOOK</a>
          </Link>
        </div>
      </Foot>
    </Seccond>
  </Body>

export default Footer
