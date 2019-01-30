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
                My name is Michael Joyce. I am a 27 year old UI/Frontend Developer from Dundalk, Louth,
                Ireland
                I like <span style={{ fontWeight: 600 }}>JavaScript</span> and everything web.
              </p>
              <p>
                I am a frontend web developer with experience using Angular 7, Angular.js, React.js,
                Backbone.js and jQuery and Bootstrap to create front end web applications for my current
                employer Celtech Software Group.
              </p>
              <p>
                I commute for Work from Dundalk, Co.Louth to Dublin via Train.
                This gives me quite a lot of time on the train to improve my JavaScript skill set.
                I have used this opportunity to take Udemy courses on Angular, React, SASS, SQL, Vue.js, and Node.js with Express
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
