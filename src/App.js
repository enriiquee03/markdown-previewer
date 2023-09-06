
import './App.css';
import Editor from './components/editor';
import Preview from './components/preview';

function App() {
  return (
    <div style={{backgroundColor : '#8cb5b5'}} className="App h-full">
    <Editor/>
    <Preview/>
    </div>
  );
}

export default App;
