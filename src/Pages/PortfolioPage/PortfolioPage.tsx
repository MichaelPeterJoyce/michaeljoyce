import React, {Component} from 'react'
import './PortfolioPage.scss';
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

export default class PortfolioPage extends Component {
    render() {
        return (
            <div className="portfolio-page">
                <div className="content-grid">
                    <h1>Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <PortfolioItem
                            name='Abinitio'
                            url={'http://skillsboost.com'}
                        />
                        <PortfolioItem
                            name='TellUsFirst'
                            url={'https://www.tellusfirst.com/'}
                        />
                        <PortfolioItem
                            name='Skillsboost'
                            url={'https://demo2.ab-initio.online/#/login'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
