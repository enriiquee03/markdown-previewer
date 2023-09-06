import React from 'react'
import useEditorStore from '../editorStore';

function Preview() {
    const { message } = useEditorStore();

  return (
    <div className='w-3/6 m-auto'>
    <label style={{backgroundColor : '#4aa2a2'}} for="preview" className="mt-5 p-1 block  text-sm font-medium text-gray-900 dark:text-black border-2 border-solid border-black">Preview</label>
      <p id='preview' style={{backgroundColor : '#c0d8d8'}}className="block p-2.5 w-full h-96 text-sm text-black bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 border-2 border-solid border-black">{message}</p>
    </div>
  )
}

export default Preview
