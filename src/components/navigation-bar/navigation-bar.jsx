import React, {Component} from 'react';
import './navigation-bar.css'

export default class NavigationBarComponent extends Component {
    
    constructor(props) { super(props) }

    render() {    
        return (
            <div>
                <div className="navigation__bar">
                    <a className="navigation__header-title">Riley Norris</a>

                    <div className="navigation__item-container">
                        <a className="navigation__item" href="">Home</a>
                        <a className="navigation__item" href="">Professional Experience</a>
                        <a className="navigation__item" href="">Projects</a>
                        <a className="navigation__item" href="">About Me</a>
                    </div>
                </div>
                <hr className="navigation__underline"/>
            </div>
        )
    }
}