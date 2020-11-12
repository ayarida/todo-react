import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  render(){
    return (
      <div className="App"> 
        <form id="to-do-form">
          <input type="text" placeholder="Enter Your Task Here.." />
          <button type="submit">Add</button>
        </form>
      </div>
    );

  }
}

export default App;
