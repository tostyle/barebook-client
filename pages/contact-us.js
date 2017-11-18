import React from 'react'
import styled from 'styled-components'
import Layout from '../src/components/MyLayout.js'
import PageLayout8 from '../src/components/PageLayout8'
import PageLayout10 from '../src/components/PageLayout10'
import PageLayout4 from '../src/components/PageLayout4'
import FormContact from '../src/components/FormContact'
import GoogleMap from '../src/components/GoogleMap'

const Body = styled.div``

export default () =>
  <Layout>
    <Body>
      <PageLayout8 text={'ติดต่อหมี'} />
      <FormContact />
      <GoogleMap />
      <PageLayout10 />
    </Body>
  </Layout>
