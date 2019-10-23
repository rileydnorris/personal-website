import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import ProfessionalExperienceComponent from '../../components/professional-experience/professional-experience';
import * as Constants from '../../app/constants';
import './experience.css';
import professional_photo from '../../images/professional_photo.jpg';
import resume from '../../images/Riley_Norris_Resume.pdf';

export default class ExperiencePage extends Component {

    constructor(props) { super(props) }

    componentWillMount() {
        document.title = "Riley Norris - Experience"
    }

    render() {    
        return (
            <div className="experience__container">
                <div className="experience__container--image">
                    <img className="experience__image" src={professional_photo} alt=""/>
                </div>
                <div className="experience__container--aboutme">
                    <h1>Professional Experience</h1>
                    <a className="experience__aboutme-link" target="_blank" href={resume}>View Resume</a>
                    <NavLink className="experience__aboutme-link" to="/projects">View Personal Projects</NavLink>
                    <p>{Constants.exp_aboutMe["description"]}</p>
                </div>
                <ProfessionalExperienceComponent data={Constants.exp_frogslayer}/>
                <ProfessionalExperienceComponent data={Constants.exp_sympliactIOS}/>
                <ProfessionalExperienceComponent data={Constants.exp_sympliactProductManager}/>
            </div>
        )
    }
}