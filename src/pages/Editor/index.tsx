import React, { useRef, useState, useEffect } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import md5 from 'md5'

import Header from 'src/components/Header'
import { Page, EditTitle, EditBox } from './styles'
import emoji from 'src/constants/emoji.json'
import storage from 'src/lib/store'
import Toast from 'src/components/Toast'

interface IIndexProps  extends RouteConfigComponentProps {
  history: any
  match: any
}

const defaulText = `<h3>济南的冬天</h3>
<p><span color="#ff0000">对于一个在北平住惯的人，像我，冬天要是不刮风，便觉得是奇迹；济南的冬天是没有风声的。</span></p>
<p>对于一个刚由伦敦回来的人，像我，冬天要能看得见日光，便觉得是怪事；济南的冬天是响晴的……</p>
<blockquote style="display: block; border-left-width: 5px; border-left-style: solid; border-left-color: rgb(208, 229, 242); padding: 4px 0px 4px 10px; margin: 4px 0px; background-color: rgb(241, 241, 241);">
  老舍1930年前后来到山东，先后在济南齐鲁大学和青岛山东大学任教7年之久，山东被称为他的“第二故乡”。
</blockquote>
<strong>作者其他作品：</strong>
<ul>
  <li><span>骆驼祥子</span></li>
  <li><span>茶馆</span></li>
  <li><span>四世同堂</span></li>
</ul>
<p><br/></p>
<img src="http://www.sdphoto.com.cn/files/userimg/20140507/99d14fb1-0d5a-448e-8b84-9856cbda4437_3.jpg" style="max-width:100%;">
<p>（图为大明湖雪景）</p>
<p><br/></p>`

const RichEditor: React.FC<IIndexProps> = ({history, match}) => {
  let _editor: any = null

  const [title, setTitle] = useState<string>('')
  const [editor, setEditor] = useState(_editor)
  const [toastText, setToastText] = useState('')
  const [noteId, setNoteId] = useState('')
  const [navTitle, setNavTitle] = useState<string>('新建')

  let toastRef = useRef<any>()

  useEffect(() => {
    (window as any).___E.config.happy = emoji.map((item: any) => item.src)
    _editor = new (window as any).___E('mobile-editor')
    // 配置菜单
    _editor.config.menus = [
			'head',
			'bold',
			'color',
			'quote',
			'list',
			'happy',
			'check'
		]
    _editor.init()
    genNoteId()
    setEditor(_editor)

    return () => {
      console.log('cleanUp>>>', )
      setEditor(null)
    }
  }, [])

  useEffect(() => {
    let note = getNoteById()
    if (editor) {
      editor.$txt.html(note.content)
      setTitle(note.title)
    }
  }, [noteId])

  // 获取 note id，没有则新建
  const genNoteId = () => {
    // 编辑模式
    if (match.params.noteId) {
      setNoteId(match.params.noteId)
      setNavTitle('编辑')
    } else {
      // 新建模式
      let newNoteId = md5(new Date().valueOf().toString())
      setNoteId(newNoteId)
      setNavTitle('新建')
    }
  }

  // 根据 id 获取 note 内容，没有则使用默认 text
  const getNoteById = () => {
    let noteList = storage.getItem('note-list') || []
    if (noteId) {
      let noteIndex = noteList.findIndex((item: any) => item.noteId === noteId)
      if (noteIndex > -1) {
        return noteList[noteIndex]
      }
    }
    return {
      noteId: noteId,
      content: defaulText,
      title: '',
      timestamp: new Date().valueOf()
    }
  }

  // 保存编辑区内容
  const handleSaveContent = (_noteId: string) => {
    if (title.trim() === '') {
      setToastText('请输入标题！')
      toastRef.current.show()
    } else {
      let noteList = storage.getItem('note-list') || []

      try {
        // 编辑, 替换
        let noteIndex = noteList.findIndex((item: any) => item.noteId === _noteId)
        if (noteIndex > -1) {
          noteList.splice(noteIndex, 1, {
            noteId: _noteId,
            title: title,
            content: editor.$txt.html(),
            contentTxt: editor.$txt.text(),
            timestamp: new Date().valueOf()
          })
        } else {
          // 新建，push
          noteList.push({
            noteId: _noteId,
            title: title,
            content: editor.$txt.html(),
            contentTxt: editor.$txt.text(),
            timestamp: new Date().valueOf()
          })
        }
        storage.setItem('note-list', noteList)

        setToastText('成功保存')
        toastRef.current.show()
        setTimeout(() => {
          handleGoBack()
        }, 300)
      } catch(error) {
        setToastText('保存失败')
        toastRef.current.show()
      }
    }
  }

  // 返回
  const handleGoBack = () => {
    history.goBack()
  }
  
  return (
    <Page>
      <Header
        renderLeft={() => (
          <i className="iconfont icon-left" onClick={() => handleGoBack()}>&#xe67d;</i>
        )}
        title={`${navTitle}记事`}
        renderRight={() => (
          <i className="iconfont icon-save" onClick={() => handleSaveContent(noteId)}>&#xe60b;</i>
        )}
      />
      <div className="main-box">

        <EditTitle value={title} onChange={(evt: any) => setTitle(evt.target.value) } id="title" placeholder="请输入标题" />

        <div className="editor-zoom">
          <EditBox
            id="mobile-editor"
            contentEditable="true"
            placeholder="请输入内容"
            suppressContentEditableWarning
          > 
          </EditBox>
        </div>
      </div>
      <Toast text={toastText} ref={toastRef} />
    </Page>
  )
}

export default React.memo(withRouter(RichEditor))