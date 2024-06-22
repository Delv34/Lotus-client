import React, { useCallback, useState } from "react";
import { createEditor, Editor, Element, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react'

const CustomEditor = {
    isBoldMarkActive(editor) {
      const marks = Editor.marks(editor)
      return marks ? marks.bold === true : false
    },
  
    isCodeBlockActive(editor) {
      const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
      })
  
      return !!match
    },
  
    toggleBoldMark(editor) {
      const isActive = CustomEditor.isBoldMarkActive(editor)
      if (isActive) {
        Editor.removeMark(editor, 'bold')
      } else {
        Editor.addMark(editor, 'bold', true)
      }
    },
  
    toggleCodeBlock(editor) {
      const isActive = CustomEditor.isCodeBlockActive(editor)
      Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
      )
    },
  }

const initialValue = [
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }],
    },
  ]

const RichTextEditor = ()=> {

    const [editor] = useState(() => withReact(createEditor()))

      const renderElement = useCallback(props => {
        switch (props.element.type) {
          case 'code':
            return <CodeElement {...props} />
          default:
            return <DefaultElement {...props} />
        }
      }, [])

      const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
      }, [])

      return ( 
        <div className="flex flex-col">
                            <Slate className="" editor={editor} initialValue={initialValue}>
                                <div>
                                    <button className="mr-[10px]"
                                    onMouseDown={event => {
                                        event.preventDefault()
                                        CustomEditor.toggleBoldMark(editor)
                                    }}
                                    >
                                    Bold
                                    </button>
                                    <button
                                    onMouseDown={event => {
                                        event.preventDefault()
                                        CustomEditor.toggleCodeBlock(editor)
                                    }}
                                    >
                                    Code Block
                                    </button>
                                </div>
                                <Editable
                                    className="h-[500px] w-[500px] border-[3px] border-[#8D96FF] rounded-[12px] pt-[10px] px-[5px] bg-white text-[#1D27A4] focus:outline-none"
                                    renderElement={renderElement}
                                    renderLeaf={renderLeaf}
                                    onKeyDown={event => {
                                      if (!event.ctrlKey) {
                                        return
                                      }
                            
                                      switch (event.key) {
                                        // When "`" is pressed, keep our existing code block logic.
                                        case '`': {
                                          event.preventDefault()
                                          CustomEditor.toggleCodeBlock(editor)
                                          break
                                        }
                            
                                        // When "B" is pressed, bold the text in the selection.
                                        case 'b': {
                                          event.preventDefault()
                                          CustomEditor.toggleBoldMark(editor)
                                          break
                                        }
                                      }
                                    }}/>
                                    
                            </Slate>

        </div>

      )}

      const CodeElement = props => {
        return (
          <pre {...props.attributes}>
            <code>{props.children}</code>
          </pre>
        )
      }
    
      const DefaultElement = props => {
        return <p {...props.attributes}>{props.children}</p>
      }
    
      const Leaf = props => {
        return (
          <span
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
          >
            {props.children}
          </span>
        )
      }

export default RichTextEditor;