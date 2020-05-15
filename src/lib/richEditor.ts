
interface ICurrentRange {
  startContainer: any
  startOffset: number
  endContainer: any
  endOffset: number
}

interface ICache {
  editor: any,
  currentLink: any
}

export default class RichEditor {
  private range: any

  constructor(range = null) {
    this.range = range
    console.log('range>>>', this.range)
  }

  // 恢复光标位置或选择范围
  private restoreSelection() {
    const selection: any = window.getSelection ? window.getSelection() : document.getSelection()
    selection.removeAllRanges()
    if (this.range) {
      selection.addRange(this.range)
    } else {
      const content = document.getElementById('editor')
      const div = document.createElement('div')
      const range = document.createRange()
      content?.appendChild(div)
      range.setStart(div, 0)
      range.setEnd(div, 0)
      selection.addRange(range)
      console.log('range>>>', range)
      this.range = range
    }
  };

  private saveCurrentRange(content: any) {
    const selection: any = window.getSelection ? window.getSelection() : document.getSelection()

    if (!selection?.rangeCount) {
      return
    }
    // console.log('saveCurrentRange');
    const range = selection.getRangeAt(0)
    let start = range.startContainer
    let end = range.endContainer
    // for IE11 : node.contains(textNode) always return false
    start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start;
    end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end;
    if (content.contains(start) && content.contains(end)) {
      this.range = range;
    }
  }

  public execCommand(command: string, arg: any = null) {
    console.log('inininin>>>', )
    this.restoreSelection()
    document.execCommand(command, false, arg)
  }
}