import React from 'react'
import styled from 'styled-components'
import TypePackage from '../customspage/TypePackage'

const Body = styled.div`
  margin: 80px;
  display: block;
  position: relative;
  text-align: center;
  overflow-x: scroll;
  white-space: nowrap;
`

const data = [
  {
    id: 0,
    title: 'Package A',
    link: '',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 1,
    title: 'Package B',
    link: '',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 2,
    title: 'Package C',
    link: '',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 3,
    title: 'Package D',
    link: '',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 4,
    title: 'Package E',
    link: '',
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
]

const PageLayout3 = () =>
  <Body>
    {data.map((item, i) => <TypePackage key={i} data={item} />)}
  </Body>

export default PageLayout3
