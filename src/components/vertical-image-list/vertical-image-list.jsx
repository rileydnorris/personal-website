import React, {Component} from "react";
import "./vertical-image-list.css";

export default class VerticalImageListComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="v-image__container">
                <img className="v-image__image" src={this.props.images[0]} alt=""/>
                <img className="v-image__image" src={this.props.images[1]} alt=""/>
                <img className="v-image__image" src={this.props.images[2]} alt=""/>
            </div>
        )
    }
}