import React, {Component} from "react";
import "./professional-experience.css"

export default class ProfessionalExperienceComponent extends Component {
    
    constructor(props) { super(props) }

    render() {
        return (
            <div className="pro__container">
                <hr className="pro__underline"/>
                <div className="pro__container--date-and-details">
                    <div className="pro__container--date">
                        <p className="pro__date--top">{this.props.data["endDate"]}</p>
                        <p className="pro__date--bottom">{this.props.data["beginDate"]}</p>
                    </div>
                    <div className="pro__container--details">
                        <h2 className="pro__detail__title">{this.props.data["title"]}</h2>
                        <p className="pro__detail__job-title">{this.props.data["jobTitle"]}</p>
                        <a className="pro__detail__link" target="_blank" href={this.props.data["link"]}>Link</a>
                        <p className="pro__detail__description">{this.props.data["description"]}</p>
                    </div>
                </div>
            </div>
        )
    }
}