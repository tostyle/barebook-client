import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import renderer from 'react-test-renderer'
import Counter from '../Counter'

it('example test renders without crashing with enzyme', () => {
  shallow(<Counter />)
})

it('example test renders toMatchSnapshot with Jest', () => {
  const tree = renderer.create(<Counter />)
  expect(tree.toJSON()).toMatchSnapshot()
})

it('example test renders toMatchSnapshot with Enzyme', () => {
  const tree = mount(<Counter />)
  expect(tree).toMatchSnapshot()
})
