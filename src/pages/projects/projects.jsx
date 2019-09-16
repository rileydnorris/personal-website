import React, {Component} from 'react';
import TitleHeaderComponent from '../../components/title-header/title-header';
import ImageCardComponent from '../../components/image-card/image-card';
import LinkCardComponent from '../../components/link-card/link-card';
import * as Constants from '../../app/constants'
import './projects.css'
import GithubPhoto from '../../images/github.png'
import LinkedInPhoto from '../../images/linkedin.png'
import YouTubePhoto from '../../images/youtube.png'

export default class ProjectsPage extends Component {
    
    constructor(props) { super(props) }

    render() {
        return (
            <div>
                <TitleHeaderComponent data={Constants.head_projects}/>
                <div className="link-card-items__container">
                    <LinkCardComponent title="Github" image={GithubPhoto} link="https://github.com/rileydnorris"/>
                    <LinkCardComponent title="LinkedIn" image={LinkedInPhoto} link="https://www.linkedin.com/in/riley-norris-a4a40b117/"/>
                    <LinkCardComponent title="YouTube" image={YouTubePhoto} link="https://www.youtube.com/channel/UC3k_kbyhfOi7d9Jzvu_MXBw?"/>
                </div>
                <div className="image-card-items__container">
                    <ImageCardComponent data={Constants.proj_openInvite}/>
                    <ImageCardComponent data={Constants.proj_functionField}/>
                    <ImageCardComponent data={Constants.proj_pythonInstructor}/>
                </div>
            </div>
        )
    }
}