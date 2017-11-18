import React from 'react'
import styled from 'styled-components'

import Layout from '../src/components/MyLayout.js'
import PageLayout1 from '../src/components/PageLayout1'
import PageLayout2 from '../src/components/PageLayout2'
import PageLayout3 from '../src/components/PageLayout3'
import PageLayout4 from '../src/components/PageLayout4'
import PageLayout5 from '../src/components/PageLayout5'
import PageLayout6 from '../src/components/PageLayout6'
import PageLayout7 from '../src/components/PageLayout7'

const Body = styled.div``

export default () =>
  <Layout>
    <Body>
      <PageLayout1 />
      <PageLayout2 />
      <PageLayout3 />
      <PageLayout4 />
      <PageLayout5 />
      <PageLayout6 />
      <PageLayout6 />
      <PageLayout6 />
      <PageLayout7 />
    </Body>
  </Layout>
