import React, {Component} from 'react';
import TitleHeaderComponent from '../../components/title-header/title-header';
import * as Constants from '../../app/constants';
import './contact.css';

export default class ContactPage extends Component {

    render() {
        return (
            <div>
                <TitleHeaderComponent data={Constants.head_contact}/>
            </div>
        )
    }
}