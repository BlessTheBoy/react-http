import React from 'react'
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounter2 from './components/HookCounter2';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookComponent from './components/IntervalHookComponent';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterTwo />
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value="BlessTheBoy">
        <ChannelContext.Provider value = "Web Developer">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookComponent /> */}
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
