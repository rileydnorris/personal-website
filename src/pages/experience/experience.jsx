import React, {Component} from 'react';
import './experience.css';
import professional_photo from '../../images/professional_photo.jpg';
import ProfessionalExperienceComponent from '../../components/professional-experience/professional-experience'
import * as Constants from '../../app/constants'

export default class ExperiencePage extends Component {
    constructor(props) { super(props) }

    render() {    
        return (
            <div className="experience__container">
                <div className="experience__container--image">
                    <img className="experience__image" src={professional_photo} alt=""/>
                </div>
                <div className="experience__container--aboutme">
                    <h1>Professional Experience</h1>
                    <p>
                    Since high school, I have been developing a passion for development work across both personal and professional projects. I started learning iOS development through personal projects shortly before high school graduation. Upon entering Texas A&M University I decided to expand my knowledge by starting a project at an on-campus organization called The Aggie Coding Club. Here I began to learn how to work in teams both in terms of communication, as well as in terms of technical work including tools like Git. My work in The Aggie Coding Club earned me recognition from the club’s president, leading me to my first professional development job at a local startup created by an Oral Surgeon in town called Sympliact. Within a few months of starting as an iOS developer at Sympliact, I worked my way up to the project manager of the iOS team where I led several individuals as we built out the app according to business needs from our CEO. A few months after taking that position, I was offered the position of Product Manager. In this role I lead the development across all of our teams and worked closely with our CEO to establish the company’s vision and ensure we were maintaining consistent progress towards market dominance. 
                    <br/>
                    <br/>
                    During my time at Sympliact I learned a wide variety of skills as I worked in a fast-paced startup environment. I learned how a large scale system of different Web, Android, and iOS applications can work and communicate together. I also learned how to effectively communicate to other members of a team, and how certain development frameworks such as Agile work in the real world. As Product Manager, I was also able to learn how development work can fit into the business side of a company. I was able to improve communication skills as well given unique challenges posed in the position, such as communicating technical details to our CEO who has no technical knowledge.
                    <br/>
                    <br/>
                    After a year and a half at Sympliact, I began a position at a software consulting company named FrogSlayer where I currently work. At FrogSlayer I am developing in a wide array of technologies while also learning how development works in a larger and more established company, where hopefully I can learn the skills necessary to be a critical member of any development team I work on.
                    </p>
                </div>
                <ProfessionalExperienceComponent data={Constants.frogslayer}/>
                <ProfessionalExperienceComponent data={Constants.sympliact_ios}/>
                <ProfessionalExperienceComponent data={Constants.sympliact_product_manager}/>
            </div>
        )
    }
}