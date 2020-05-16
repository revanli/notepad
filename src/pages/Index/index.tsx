import React, { useEffect, useState, useRef } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { withRouter } from 'react-router-dom'

import storage from 'src/lib/store'
import { timeAgo } from 'src/utils/index'
import Toast from 'src/components/Toast'

import Header from 'src/components/Header'

import {
  Page,
  NodeList,
  NodeItem,
  EmptyContent
} from './styles'

interface IIndexProps  extends RouteConfigComponentProps {
  history: any
  match: any
}

const Index: React.FC<IIndexProps> = ({history, match}) => {
  const [noteList, setNoteList] = useState<any>([])
  const [toastText, setToastText] = useState('')

  let toastRef = useRef<any>()

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

  const handDeleteNote = (evt: any, noteId?: string) => {

    evt.stopPropagation()
    evt.nativeEvent.stopImmediatePropagation()

    if (!noteId) {
      setToastText('无法删除')
      toastRef.current.show()
      return
    } else {
      try {
        let noteIndex = noteList.findIndex((item: any) => item.noteId === noteId)
        if (noteIndex > -1) {
          noteList.splice(noteIndex, 1)
          storage.setItem('note-list', noteList)
          setToastText('删除成功')
          toastRef.current.show()
        }
      } catch(err) {
        setToastText('删除失败')
        toastRef.current.show()
      }
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
                    <div className="info">
                      <span className="date">更新于: {timeAgo(item.timestamp)}</span>
                      <div className="delte" onClick={(evt) => handDeleteNote(evt, item.noteId)}>
                        <i className="iconfont icon-delete">&#xe6b3;</i>
                        <span>删除</span>
                      </div>
                    </div>
                  </div>
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
      <Toast text={toastText} ref={toastRef} />
    </Page>
  )
}

export default React.memo(withRouter(Index))