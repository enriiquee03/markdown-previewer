import React from 'react'
import useEditorStore from '../editorStore';

const Editor = () => {
    const { message, setMessage } = useEditorStore();


    function OnTextAreaChange(event) {
        const newMessage = event.target.value
        setMessage(newMessage)
    }
  
  return (
    <div className='w-2/6 m-auto flex flex-col gap-y-px'>
      <label style={{backgroundColor : '#4aa2a2'}} for="message" className="mt-5 p-1 block  text-sm font-medium text-gray-900 dark:text-black border-2 border-solid border-black">Editor</label>
      <textarea onChange={OnTextAreaChange} style={{backgroundColor : '#c0d8d8'}} id="message" rows="4" className="block p-2.5 w-full h-96 text-sm text-black bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-solid border-black" placeholder="Write your thoughts here...">{message}</textarea>
    </div>
  )
}

export default Editor;  
