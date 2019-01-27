import React, {Component} from 'react';
import './PortfolioItem.scss'

class PortfolioItem extends Component<PortfolioItemInterface> {
    render() {
        let description = '';
        let image = '';

        switch (this.props.name) {
            case 'Skillsboost':
                description = require("../../assets/posts/skillsboost.html");
                image = 'skillsboost.png';
                break;
            case 'Abinitio':
                description = require("../../assets/posts/abinitio.html");
                image = 'abinitio.png';
                break;
            case 'TellUsFirst':
                description = require("../../assets/posts/tellusfirst.html");
                image = 'tellusfirst.png';
        }

        return (
            <div className="card portfolio-item">
                <img className="card-img-top" src={require("../../assets/img/" + image)} alt="Portfolio Image"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text" dangerouslySetInnerHTML={{__html: description}}>
                    </p>
                    <a href={this.props.url} className="btn btn-primary">Visit</a>
                </div>
            </div>
        );
    }
}

export interface PortfolioItemInterface {
    name: string
    url: string
}

export default PortfolioItem;