import React from 'react'
import styled from 'styled-components'
import Layout from '../src/components/MyLayout.js'
import PageLayout8 from '../src/components/PageLayout8'
import PageLayout9 from '../src/components/PageLayout9'
import PageLayout4 from '../src/components/PageLayout4'

const Body = styled.div``

export default () =>
  <Layout>
    <Body>
      <PageLayout8 text={'หนังสือ คือ ประตู้สู่จินตนาการของคุณ'} />
      <PageLayout9 />
      <PageLayout4 head={false} />
    </Body>
  </Layout>
