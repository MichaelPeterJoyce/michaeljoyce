import React, { Component } from 'react';
import Layout from './hoc/Layout';
import LandingPage from './Pages/LandingPage/LandingPage';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import AboutPage from './Pages/AboutPage/AboutPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <LandingPage></LandingPage>
          <PortfolioPage></PortfolioPage>
          <AboutPage></AboutPage>
          
        </Layout>     
      </div>
    );
  }
  
}

export default App;
