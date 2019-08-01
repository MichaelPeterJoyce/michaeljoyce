import React, { Component } from 'react'
import './AboutPage.scss'

export default class AboutPage extends Component {
  render() {
    return (
      <div className="container about-page">
        <div>
          <h1>About Me</h1>
          <div className="about-wrapper">
            <div className="about-content">
              <p>
                My name is Michael Joyce. I am a 28 year old Web Application Developer from Dundalk, Louth,
                Ireland
                I like <span style={{ fontWeight: 600 }}>JavaScript</span> and everything web.
              </p>
              <p>
                I am an experienced Web application developer with experience using Angular.js, Angular 7, React.js with Redux, Backbone.js, Node.js and JAVA (Spring Boot).
                I have worked commercially with agile software teams as part of agile development.
              </p>
              <p>
                While I have specialized and focus on Web technologies using Javascript I also have knowledge and have worked on Android applications written in Java and Kotlin.
                I also have worked on the full software web stack using a combination of Node.js with the Express framework on some small internal projects within Celtech and with JAVA using the Spring boot framework both integrating with a relational PostgreSQL database.
              </p>
              <p>
                This current portfolio site is built using <strong>React.js</strong>, some custom SASS and bootstrap 4
              </p>
              <p>
                Scroll down to see some of the larger commercial projects I have worked on while working for Optimum Results and Celtech Software Ltd.
              </p>
              <p className="text-emoji">
                \ (•◡•) /
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
