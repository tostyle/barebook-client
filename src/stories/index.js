import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import YellowBtn from '../components/YellowBtn/YellowBtn'
import YellowTextInput from '../components/YellowTextInput/YellowTextInput'
import YellowTextarea from '../components/YellowTextarea/YellowTextarea'

storiesOf('ตุ่มเหลือง', module)
  .add('ไม่ส่ง props', () => <YellowBtn />)
  .add('ไม่ส่ง size="mini"', () => <YellowBtn size="mini" />)
  .add('ไม่ส่ง text="กด"', () => <YellowBtn text="กด" />)

storiesOf('ช่องกรอก', module)
  .add('ไม่ส่ง props', () => <YellowTextInput />)
  .add('ส่ง ph="จงกรอก"', () => <YellowTextInput ph="จงกรอก" />)
  .add('ส่ง typ="password"', () => <YellowTextInput typ="password" />)

storiesOf('เขตกรอก', module).add('ไม่ส่งเพราะส่งไรไม่ได้', () =>
  <YellowTextarea />
)
