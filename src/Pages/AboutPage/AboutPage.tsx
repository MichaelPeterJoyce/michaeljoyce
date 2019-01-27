import React, {Component} from 'react'
import './AboutPage.scss'

export default class AboutPage extends Component {
    render() {
        return (
            <div className="about-page">
                <div className="content-grid">
                    <h1>About Me</h1>
                    <div className="about-wrapper">
                        <div className="about-content">
                            <p>
                                My name is Michael Joyce. I am a 27 year old UI/Frontend Developer from Dundalk, Louth, Ireland
                                I like <span style={{fontWeight: 600}}>JavaScript</span> and everything web.
                            </p>
                            <p>
                                I am a frontend web developer with experience using Angular 7, Angular.js, React.js, Backbone.js and jQuery and Bootstrap to create front end web applications for my current employer Celtech Software Group.
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
