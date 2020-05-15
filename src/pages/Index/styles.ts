import styled from 'styled-components'
import globalStyle from 'src/assets/globalStyle'

interface IThumbnailProps {
  width: number,
  height: number,
  background: string
}

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  .icon-create {
    font-size: .44rem;
    color: #505050;
  }
`

export const NodeList = styled.div`
  background: #F0F0F0;
`

export const NodeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-height: 3.2rem;
  padding: .32rem .26rem;
  background: #fff;
  margin-bottom: .15rem;
  .left {
    flex: 1;
    margin-right: .3rem;
  }
  .info {
    font-size: .24rem;
    color: #cccccc;
    .date {
      margin-left: .3rem;
    }
  }
  .right {
    
  }
  .title {
    font-size: .32rem;
    color: #505050;
    ${globalStyle.linesEllipsis(2)};
    line-height: 1.3em;
    margin-bottom: .13rem;
  }
  .sub-title {
    font-size: .28rem;
    color: #b2bac2;
    ${globalStyle.linesEllipsis(2)};
    line-height: 1.3em;
    margin-bottom: .15rem;
  }
`

export const Thumbnail = styled.div`
  width: ${(props: IThumbnailProps) => props.width / 100}rem;
  height: ${(props: IThumbnailProps) => props.height / 100}rem;
  background-image: url(${(props: IThumbnailProps) => props.background});
  background-size: cover;
`
