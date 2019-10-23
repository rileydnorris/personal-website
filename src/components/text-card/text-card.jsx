import React, {Component} from "react";
import "./text-card.css"

export default class TextCardComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="text-card__container">
                <p className="text-card__title">{this.props.title}</p>
            </div>
        )
    }
}