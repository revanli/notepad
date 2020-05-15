// global style

import { createGlobalStyle } from 'styled-components'

export const ResetStyle = createGlobalStyle`
  html, body, div, span {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol, ul {
    list-style: none
  }
  blockquote, q {
    quotes: none
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none
  }
  table {
    border-collapse: collapse;
    border-spacing: 0
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  * {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
  }
  /* hack place holder */
  [placeholder]:empty::before {
    content: attr(placeholder);
    color: #ccc;
  }

  [placeholder]:empty:focus::before {
    content: '';
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: PingFang SC, Helvetica, Tahoma, Arial, "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
