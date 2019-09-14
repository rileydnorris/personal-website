import React, {Component} from 'react'
import './link-circle.css'
import { white, black, redBright, red } from 'ansi-colors'

export default class LinkCircleComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="circle__container--overall" style={{backgroundColor: this.props.bgColor}}>
                <div className="circle__container--table">
                    <a className="circle__button" href={this.props.link}>{this.props.title}</a>
                </div>
            </div>
        )
    }
}