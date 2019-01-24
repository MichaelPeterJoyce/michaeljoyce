import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SocialIcons.scss';
export default class SocialIcons extends Component {
  render() {
    const colorPrimary = 'red';
    return (
      <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/MichaelPeterJoyce" style={{ color: colorPrimary }}>
          <FontAwesomeIcon className='icon' icon={['fab', 'github']} size='2x' color='black' />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joycemichael" style={{ color: colorPrimary }}>
          <FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} size='2x' color='black' />
        </a>
      </div>
    )
  }
}
