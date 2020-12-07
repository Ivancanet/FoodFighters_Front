import React from 'react';
import './App.css';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import {Link, Route} from 'react-router-dom';


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Home/>
      <Footer/>
    </div>
  );
  }
}

export default App;
