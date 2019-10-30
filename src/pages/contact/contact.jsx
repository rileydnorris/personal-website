import React, {Component} from "react";
import TitleHeaderComponent from "../../components/title-header/title-header";
import * as Constants from "../../app/constants/constants";
import GitHubImage from "../../images/github.png";
import LinkedInImage from "../../images/linkedin.png";
import "./contact.css";

export default class ContactPage extends Component {

    componentWillMount() {
        document.title = "Riley Norris - Contact"
    }

    render() {
        return (
            <div>
                <TitleHeaderComponent data={Constants.head_contact}/>

                <div className="contact__column--container">
                    <h2>Contact Details</h2>
                    <div className="contact__link-image--container">
                        <p className="contact__image-text">#</p>
                        <p className="contact__text">(281) 705-4309</p>
                    </div>
                    <div className="contact__link-image--container">
                        <p className="contact__image-text">@</p>
                        <a className="contact__link" target="_blank" href="mailto:rileydnorris@gmail.com">rileydnorris@gmail.com</a>
                    </div>
                </div>

                <div className="contact__column--container">
                    <h2>Social Media</h2>
                    <div className="contact__link-image--container">
                        <img className="contact__image" src={GitHubImage} alt=""/>
                        <a className="contact__link" target="_blank" href="https://github.com/rileydnorris">GitHub</a>
                    </div>
                    <div className="contact__link-image--container">
                        <img className="contact__image" src={LinkedInImage} alt=""/>
                        <a className="contact__link" target="_blank" href="https://www.linkedin.com/in/riley-norris-a4a40b117/">LinkedIn</a>
                    </div>
                </div>
            </div>
        )
    }
}