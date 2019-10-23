import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";
import "./page-not-found.css"

export default class PageNotFoundPage extends Component {
    
    constructor(props) { super(props) }

    componentWillMount() {
        document.title = "Riley Norris - 404"
    }

    render() {
        return (
            <div className="not-found__container">
                <h1 className="not-found__404">404 - Not Found</h1>
                <h1 className="not-found__header">This is not the page you are looking for...</h1>
                <p className="not-found__subtitle">* hand waving *</p>
                <p>The page you are trying to reach could not be found, double check your url or 
                    <Link className="not-found__link" to="/home"> return to home</Link>
                    .
                </p>
            </div>
        )
    }
}