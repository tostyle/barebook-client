// global-styles.js
import { injectGlobal } from 'styled-components'

injectGlobal`
   @import url('https://fonts.googleapis.com/css?family=Kanit:Regular');
   @import url('https://fonts.googleapis.com/css?family=Kanit:Extra-Light');
   @import url('https://fonts.googleapis.com/css?family=Kanit:Bold');
   *, *:before, *:after {
    font-family: 'Kanit', sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a{
    color: white;
    text-decoration: none;
  }
  body{
    margin:0;
  }
`
