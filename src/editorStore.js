import {create} from 'zustand';

const useEditorStore = create((set) => ({
  message: localStorage.getItem('message') || 'This is a default message',
  setMessage: (newMessage) => {
    set({ message: newMessage });
    localStorage.setItem('message', newMessage);
  },
}));

export default useEditorStore;