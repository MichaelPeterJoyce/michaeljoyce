import React, { Component } from 'react'

import './LandingPage.scss';
import Navigation from '../../components/Navigation/Navigation';
import SocialIcons from '../../components/Social-Icons/SocialIcons';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <Navigation/>
        <main>
          <div className="intro-wrapper">
            <div className="intro-name">Michael Joyce</div>
            <div className="tagline">
              UI Developer - Dundalk, Ireland
          </div>
            <SocialIcons />
          </div>
        </main>
      </div>
    )
  }
}

