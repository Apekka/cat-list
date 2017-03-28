import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './cats.json';
import CatList from './CatList';
import CatSelection from './CatSelection';
import CatCreation from './CatCreation';
const uuid = require('uuid/v1');
console.log('data : ', data);

class App extends Component {

  constructor(props) {
    super();

    const smartCats = data.cats.map( item => {
      return { ...item, selected: false};
      //return Object.assign({}, item, {selected: false})
    });

    console.log('smartCats: ' + smartCats);

    this.state = {
      cats: smartCats
    }
  } 

  selectCat(cat) {

    const newCats = this.state.cats.map( item => {

      if(item.id === cat.id) {
        item.selected = !item.selected;
      }

      return item

    });
    this.setState({
      cats: newCats
    }); 
  }

  addCat = (url) => {
    const strength = Math.round(Math.random() * 100);
    const id = uuid();
    console.log('id : ', id);
    console.log('strength : ', strength);
    console.log('url : ', url);

    this.setState({
      cats: [...this.state.cats, {id, url: url, strength}]
    });

    const test = JSON.stringify(this.state.cats[this.state.cats.length-1])
    console.log('LE GWO CHAT : ', test);

  }


  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       
      <div>
        <CatCreation addCat={this.addCat}/>
        <CatSelection cats={this.state.cats}/>
        <CatList cats={this.state.cats} selectCas={this.selectCat.bind(this)}/>
      </div>
      </div>
    );
  }
}

export default App;