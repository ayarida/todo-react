import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems.js';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash)



class App extends React.Component{
  constructor(props){
    super(props); 
    this.state={
      items: [], 
      currentItem:{
        text:'', 
        key:''
      }
     
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }

  handleInput(event){
    this.setState({
      currentItem:{
        text:event.target.value,
        key:Date.now()
      }
    })
  }

  addItem(event){
    event.preventDefault(); 
    const newItem=this.state.currentItem; 
    //console.log(newItem);
    if(newItem.text!=""){
      const newItems=[newItem,...this.state.items]; 
      this.setState({
        items: newItems, 
        currentItem:{
          text: '', 
          key: ''
        }
      })
    }
  }

  deleteItem(key){
    // just filter the items that are different than the key and show them
    const filteredItems=this.state.items.filter(item=> item.key!==key)
    this.setState({
      items:filteredItems
    })
  }

  setUpdate(textValue, key){
    const items=this.state.items;
    items.map(item=>{
      if(item.key===key){
        item.text=textValue;
      }
    })
    this.setState({
      items:items
    })

    
  }

  render(){
    return (
      <div className="App"> 
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter Your Task Here.." 
          value={this.state.currentItem.text} 
          onChange={this.handleInput}/>
          <button type="submit">Add</button>
        </form>
      </header>
      <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}></ListItems>
      </div>
    );

  }
}

export default App;
