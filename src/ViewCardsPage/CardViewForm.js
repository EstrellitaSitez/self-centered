import React, {useState} from 'react'
import { Button, Input } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


export default function CardViewForm(props) {

    // const [notes, takeNotes] = useState('')
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
   
    const addToSpread = () => {
        let notesHtmlObj = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        props.addToSpread(notesHtmlObj)
    }
  
    const handleClick = () => {
        addToSpread()
        props.closeModal()
    }

    return(
        <div style={{margin:'10%', marginTop:'0', marginLeft:'auto', marginRight:'auto'}}>
            {
                (editorState!= null )?
                <div>
                <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                editorStyle={{backgroundColor:'white', minHeight:'20em'}}
                wrapperStyle = {{margin:'5%'}}
                stripPastedStyles={true}
                />
    {/* IF THERES NO WRITING IN EDITOR DISABLE BUTTON */}
    {/* disabled={()? false : true} */}
                    <Button  onClick={()=>handleClick()} type="primary" ghost style={{margin:'10%'}}>
                         Save Observation 
                    </Button>
                </div>
                    :
                    null
            }
        </div>
    )
}