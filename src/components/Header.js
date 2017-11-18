import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const NavBar = styled.div`
  display: table;
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #efcd38, #e5ab4a);
  color: white;
  font-size: 24px;
  z-index: 1;
`

const Menu = styled.div`
  display: table-cell;
  vertical-align: bottom;
  margin: auto;
  text-align: center;
  width: 50%;
`

const Logo = styled.div`
  display: table-cell;
  vertical-align: middle;
  margin: auto;
  width: 15%;
  height: inherit;
  > div {
    width: 100%;
    position: relative;
    display: block;
    text-align: right;
    > a > img {
      display: block;
      width: 40%;
      height: auto;
      float: right;
    }
  }
`

const RightMenu = styled.div`
  display: table-cell;
  font-size: 20px;
  vertical-align: bottom;
  margin: auto;
  text-align: left;
  width: 25%;
  height: inherit;
  > div {
    display: inline-block;
  }
  > .left {
    display: inline-block;
    width: 35%;
  }
  > .right {
    width: 65%;
  }
`

const DDMenu = styled.div`
  position: absolute;
  visibility: hidden;
  top: 100px;
  left: 0;
  max-width: 100%;
  width: 100%;
  padding: 10px;
  background-color: #d4b247;
  border-radius: 5px;
  > a {
    width: 10%;
    display: inline-flex;
    justify-content: space-between;
    font-size: 20px;
    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`
const ConLink = styled.div`
  padding: 0 50px;
  display: inline-flex;
  &:hover {
    > div {
      visibility: visible;
    }
  }
`

const menu_data = [
  {
    title: 'CREATE',
    link: '/',
    submenu: [
      {
        title: 'Start Project',
        link: '/',
      },
      {
        title: 'Ask for Help',
        link: '/',
      },
      {
        title: 'Hire Expert',
        link: '/',
      },
    ],
  },
  {
    title: 'FORMAT',
    link: '/',
    submenu: [
      {
        title: 'Start Project',
        link: '/',
      },
      {
        title: 'Ask for Help',
        link: '/',
      },
      {
        title: 'Hire Expert',
        link: '/',
      },
    ],
  },
  {
    title: 'HIRE EXPERT',
    link: '/',
    submenu: [
      {
        title: 'Start Project',
        link: '/',
      },
      {
        title: 'Ask for Help',
        link: '/',
      },
      {
        title: 'Hire Expert',
        link: '/',
      },
    ],
  },
]

export default () =>
  <NavBar>
    <Logo>
      <div>
        <Link href="/">
          <a>
            <img src="/static/images/logo.png" />
          </a>
        </Link>
      </div>
    </Logo>
    <Menu_Center menu_data={menu_data} />
    <RightMenu>
      <div className="left">
        <div />
        <div>
          <Link href="/login">
            <a>LOG IN</a>
          </Link>
        </div>
      </div>
      <div className="right">
        <div>TH | EN</div>
        <div>THB ฿</div>
      </div>
    </RightMenu>
  </NavBar>

const Menu_Center = ({ menu_data }) =>
  <Menu>
    {menu_data.map((item, i) =>
      <ConLink key={i}>
        <Link href={item.link}>
          <a>
            {item.title}
          </a>
        </Link>
        <DDMenu>
          {item.submenu.map((sub_item, j) =>
            <Link key={j} href={sub_item.link}>
              <a>
                {sub_item.title}
              </a>
            </Link>
          )}
        </DDMenu>
      </ConLink>
    )}
  </Menu>
