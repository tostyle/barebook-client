import React from 'react'
import styled from 'styled-components'
import Layout from '../src/components/MyLayout.js'
import SelectType from '../src/components/createpage/SelectType'
import DefaultPackage from '../src/components/createpage/DefaultPackage'
import CustomPackage from '../src/components/createpage/CustomPackage'
const Body = styled.div``

export default () =>
  <Layout>
    <Body>
      <SelectType> </SelectType>
      <DefaultPackage />
      <CustomPackage />
    </Body>
  </Layout>
