import React, {Component} from 'react';
import './image-card.css';

export default class ImageCardComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="image-card__container">
                <img className="image-card__image" src={this.props.data["image"]} alt=""/>
                <div className="image-card__container--details">
                    <h2 className="image-card__title">{this.props.data["title"]}</h2>
                    <p className="image-card__description">{this.props.data["description"]}</p>
                    <a className="image-card__link" target="_blank" href={this.props.data["link"]}>{this.props.data["linkName"]}</a>
                </div>
            </div>
        )
    }
}