import React, {Component} from "react";
import TitleHeaderComponent from "../../components/title-header/title-header";
import "./about-me.css";
import * as Constants from "../../app/constants/constants";
import VerticalImageListComponent from "../../components/vertical-image-list/vertical-image-list";
import GenericTitleBodyComponent from "../../components/generic-title-body/generic-title-body";

export default class AboutMePage extends Component {

    constructor(props) { super(props) }

    componentWillMount() {
        document.title = "Riley Norris - About Me"
    }

    render() {
        return (
            <div>
                <TitleHeaderComponent data={Constants.head_aboutMe}/>
                <div className="me__content-container">
                    <div className="me__title-body-container">
                        <GenericTitleBodyComponent title={Constants.me_programming["title"]} body={Constants.me_programming["body"]}/>
                        <GenericTitleBodyComponent title={Constants.me_reading["title"]} body={Constants.me_reading["body"]}/>
                        <GenericTitleBodyComponent title={Constants.me_travelling["title"]} body={Constants.me_travelling["body"]}/>
                    </div>
                    <div className="me__v-image-container">
                        <VerticalImageListComponent images={Constants.me_images}/>
                    </div>
                </div>
            </div>
        )
    }
}