import React from 'react'
import styled from 'styled-components'
import TypeBTumb from './customspage/TypeBTumb'

const Body = styled.div`
  margin: 80px;
  display: block;
  position: relative;
  text-align: center;
  > div {
    display: flex;
  }
`

const Head = styled.div`
  display: block;
  width: 100%;
  justify-content: center;
  font-size: 48px;
`

const PageLayout4 = ({ head }) =>
  <Body>
    {head ? <Head>Getting Started is Easy!</Head> : null}
    <div>
      <TypeBTumb />
      <TypeBTumb />
      <TypeBTumb />
    </div>
  </Body>

PageLayout4.propTypes = {
  head: React.PropTypes.bool,
}

PageLayout4.defaultProps = {
  head: true,
}

export default PageLayout4
