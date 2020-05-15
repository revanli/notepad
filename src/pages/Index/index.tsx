import React, { useRef, useEffect, useState, useContext } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import Header from 'src/components/Header'

import {
  Page,
  NodeList,
  NodeItem,
  Thumbnail
} from './styles'

interface IIndexProps  extends RouteConfigComponentProps {
  history: any
  match: any
}

const mockNodeList = Array(4).fill('').map(_ => ({
  title: '标题标题标题标题标题标标题标题标题标题标题标标题标题标题标题标题标标题标题标题标题标题标',
  subTitle: '二级标题二级标题二级标题二级标题二级标题标二级标题二级标题二级标题二级标题二级标题标二级标题二级标题二级标题二级标题二级标题标二级标题二级标题二级标题二级标题二级标题标',
  thumbnail: 'https://user-gold-cdn.xitu.io/2020/5/10/171fbf47f78adf58?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1'
}))

const Index: React.FC<IIndexProps> = () => {
  const [nodeList, setNodeList] = useState<any>(mockNodeList)
  
  return (
    <Page>
      <Header
        title="记事本"
        renderRight={() => (
          <i className="iconfont icon-create">&#xe8fe;</i>
        )}
      />
      <NodeList>
        {
          nodeList.map((item: any, index: number) => (

            <NodeItem key={`NODE-ITEM-${index}`}>
              <div className="left">
                <div className="title">
                {item.title}
                </div>
                <div className="sub-title">
                  {item.subTitle}
                </div>
                <p className="info">
                  <span className="author">用户</span>
                  <span className="date">2020-05-14</span>
                </p>
              </div>
              <div className="right">
                <Thumbnail width={200} height={200} background={item.thumbnail} className="thumbnail" />
              </div>
            </NodeItem>
          ))
        }
      </NodeList>
    </Page>
  )
}

export default React.memo(Index)