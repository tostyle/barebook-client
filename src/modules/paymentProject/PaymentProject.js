import 'react-tabs/style/react-tabs.css'
import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import InternetBankingContainer from './InternetBankingContainer'
import CreditCardContainer from './CreditCardContainer'

const PaymentProject = props =>
  <div>
    <Tabs>
      <TabList>
        <Tab>Internet Banking</Tab>
        <Tab>Credit Card</Tab>
      </TabList>
      <TabPanel>
        <InternetBankingContainer />
      </TabPanel>
      <TabPanel>
        <CreditCardContainer />
      </TabPanel>
    </Tabs>
  </div>

export default PaymentProject
