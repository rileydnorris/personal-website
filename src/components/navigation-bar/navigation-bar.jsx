import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';
import './navigation-bar.css'

export default class NavigationBarComponent extends Component {
    
    constructor(props) { super(props) }

    render() {    
        return (
            <div>
                <div className="navigation__bar">
                    <Link className="navigation__header-title" to="/home">Riley Norris</Link>

                    <div className="navigation__item-container">
                        <Link className="navigation__item" to="/home">Home</Link>
                        <Link className="navigation__item" to="/experience">Professional Experience</Link>
                        <Link className="navigation__item" to="/projects">Projects</Link>
                        <Link className="navigation__item" to="/about-me">About Me</Link>
                    </div>
                </div>
                <hr className="navigation__underline"/>
            </div>
        )
    }
}