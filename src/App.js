import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  render(){
    return (
      <form id="to-do-form">
        <input type="text" placeholder="Enter your task here.." />
        <button type="submit">Add</button>
      </form>
    );

  }
}

export default App;
