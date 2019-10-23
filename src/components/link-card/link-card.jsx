import React, {Component} from "react";
import "./link-card.css"

export default class LinkCardComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <a className="link-card__container" target="_blank" href={this.props.link}>
                <img className="link-card__image" src={this.props.image} alt=""/>
                <p className="link-card__title">{this.props.title}</p>
            </a>
        )
    }
}