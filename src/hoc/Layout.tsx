import React, { Component } from 'react'
import './Layout.scss'
export default class layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
      </div>
    )
  }
}