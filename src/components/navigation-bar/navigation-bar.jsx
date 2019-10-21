import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
import './navigation-bar.css';

export default class NavigationBarComponent extends Component {
    
    constructor(props) { super(props) }

    render() {    
        return (
            <div>
                <div className="navigation__bar">
                    <Link className="navigation__header-title" to="/home">Riley Norris</Link>

                    <div className="navigation__item-container">
                        <NavLink className="navigation__item" activeStyle={{fontWeight: "bold"}} to="/home">Home</NavLink>
                        <NavLink className="navigation__item" activeStyle={{fontWeight: "bold"}} to="/experience">Professional Experience</NavLink>
                        <NavLink className="navigation__item" activeStyle={{fontWeight: "bold"}} to="/projects">Projects</NavLink>
                        <NavLink className="navigation__item" activeStyle={{fontWeight: "bold"}} to="/about-me">About Me</NavLink>
                        <NavLink className="navigation__item" activeStyle={{fontWeight: "bold"}} to="/contact">Contact</NavLink>
                    </div>
                </div>
                <hr className="navigation__underline"/>
            </div>
        )
    }
}