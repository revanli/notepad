import { createGlobalStyle } from 'styled-components'

export const IconStyle = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1817675 */
    src: url('//at.alicdn.com/t/font_1817675_8navj8z9oir.eot');
    src: url('//at.alicdn.com/t/font_1817675_8navj8z9oir.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1817675_8navj8z9oir.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1817675_8navj8z9oir.woff') format('woff'),
    url('//at.alicdn.com/t/font_1817675_8navj8z9oir.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1817675_8navj8z9oir.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
