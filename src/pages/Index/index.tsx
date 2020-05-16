import React, { useEffect, useState } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import storage from 'src/lib/store'
import { timeAgo } from 'src/utils/index'

import Header from 'src/components/Header'

import {
  Page,
  NodeList,
  NodeItem,
  Thumbnail,
  EmptyContent
} from './styles'

interface IIndexProps  extends RouteConfigComponentProps {
  history: any
  match: any
}

const Index: React.FC<IIndexProps> = ({history, match}) => {
  const [noteList, setNoteList] = useState<any>([])

  useEffect(() => {
    let storeNoteList = storage.getItem('note-list') || []
    // 倒序排序，最新的
    setNoteList(storeNoteList.reverse())
  }, [])

  const handleToEditor = (noteId?: string) => {
    if (!noteId) {
      history.push('/editor')
    } else {
      history.push(`/editor/${noteId}`)
    }
  }

  return (
    <Page>
      <Header
        title="记事本"
        renderRight={() => (
          <i className="iconfont icon-create" onClick={() => handleToEditor()}>&#xe8fe;</i>
        )}
      />
      {
        noteList.length > 0 
        ? (
          <NodeList>
            {
              noteList.map((item: any, index: number) => (
                <NodeItem
                  key={`NODE-ITEM-${index}`}
                  onClick={() => handleToEditor(item.noteId)}
                >
                  <div className="left">
                    <div className="title">
                    {item.title}
                    </div>
                    <div className="sub-title">
                      {item.contentTxt}
                    </div>
                    <p className="info">
                      <span className="date">更新于: {timeAgo(item.timestamp)}</span>
                    </p>
                  </div>
                  {/* <div className="right">
                    <Thumbnail width={200} height={200} background={item.thumbnail} className="thumbnail" />
                  </div> */}
                </NodeItem>
              ))
            }
          </NodeList>
        ) : (
          <EmptyContent>
            <i className="iconfont icon-empty">&#xe6e3;</i>
          </EmptyContent>
        )
      }
    </Page>
  )
}

export default React.memo(withRouter(Index))