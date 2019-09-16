import React, {Component} from 'react';
import './title-header.css'

export default class TitleHeaderComponent extends Component {
    
    constructor(props) { super(props) }

    render() {
        return (
            <div className="header__container">
                <h1 className="header__title">{this.props.data["title"]}</h1>
                <p className="header__subtitle">{this.props.data["subtitle"]}</p>
                <hr className="header__underline"/>
            </div>
        )
    }
}