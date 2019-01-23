import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>        
      </div>
    );
  }
}

export default App;
