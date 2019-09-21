import React, {Component} from 'react';
import './generic-title-body.css';

export default class GenericTitleBodyComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div>
                <h2 className="title-body__title">{this.props.title}</h2>
                <p className="title-body__body">{this.props.body}</p>
                <hr className="title-body__underline"/>
            </div>
        )
    }
}