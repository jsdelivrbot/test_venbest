import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import List from './components/List';
import Apidata from './containers/apidata';

class App extends Component {
  state = {
    apidata:[]
  }

  componentDidMount(){
  fetch('https://venbest-test.herokuapp.com/')
  .then((response)=>response.json())
  .then(json => this.setState({apidata:json})).then()
  }
  render() {


    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Intro message="some"/>
      
        <Apidata />

         <List List={this.state.apidata} />
      </div>
    );
  }
}
export default App;
