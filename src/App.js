import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookComponent from './components/IntervalHookComponent';

function App() {
  return (
    <div className="App">
      <IntervalHookComponent />
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
      {/* <PostForm /> */}
      {/* <PostList /> */}
    </div>
  );
}

export default App;
