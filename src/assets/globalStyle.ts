

// 一行文本溢出显示省略号
const ellipsis = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `
}

// 多行文本溢出显示省略号
const blockEllipsis = (lineNum: number = 1) => {
  return `
    div {
      position: relative;
      line-height: 1.4em;
      height: ${lineNum * 1.4}em;
      overflow: hidden;
    }
    div::after {
      content: "...";
      font-weight: bold;
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 0 .2rem 1px .45rem;
    }
  `
}

// 多行溢出显示省略号
const linesEllipsis = (lineNum: number = 1) => {
  return `
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lineNum};
    -webkit-box-orient: vertical;
  `
}

const extendClick = (offset: number = 10) => {
  return `
    position: relative;
    left: 0;
    top: 0;
    &:before {
      content: '';
      position: absolute;
      top: -${offset}px;
      bottom: -${offset}px;
      left: -${offset}px;
      right: -${offset}px;
    }
  `
}

export default {
  ellipsis,
  blockEllipsis,
  linesEllipsis,
  extendClick
}