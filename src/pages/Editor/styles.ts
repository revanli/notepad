import styled from 'styled-components'
import globalStyle from 'src/assets/globalStyle'

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  .icon-left {
    font-size: .3rem;
    color: #505050;
  }
  .icon-save {
    font-size: .23rem;
    color: #505050;
    ${globalStyle.extendClick(10)}
  }
  .main-box {
    padding: .2rem .26rem;
  }
  .editor-zoom {
    border: 1px solid #f1f1f1;
    width: 100%;
    height: 80vh;
  }
  #editor {
    width: 100%;
    height: 6rem;
    font-size: .26rem;
    color: #1A1717;
    padding: .2rem .26rem;
  }
`

export const EditTitle = styled.input`
  width: 100%;
  height: 1.04rem;
  font-size: .3rem;
  font-weight: 600;
  color: #505050;
  line-height: 1.04rem;
  white-space: nowrap;
  overflow: hidden;
`

export const EditBox = styled.textarea`
  width: 100%;
  font-size: .26rem;
  color: #1A1717;
  padding: .2rem .26rem;
`

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: .6rem;
  border-bottom: 1px solid #f1f1f1;
  i {
    padding: 0 .2rem;
    font-size: .32rem;
    line-height: .6rem;
  }
`
