import React, {Component} from 'react'
import './footer.css'

export default class FooterComponent extends Component {

    constructor(props) { super(props) }

    render() {
        return (
            <div className="footer__container">
                <div className="footer__container--contact">
                    <h1 className="footer__header">Contact</h1>
                    <div className="footer__container--row">
                        <a className="footer__link-image" href="mailto:rileydnorris@gmail.com">@</a>
                        <a className="footer__link" href="mailto:rileydnorris@gmail.com">rileydnorris@gmail.com</a>
                    </div>
                    <div className="footer__container--row">
                        <a className="footer__link-image" href="">#</a>
                        <a className="footer__link" href="">(281) 705-4309</a>
                    </div>
                </div>
                <div className="footer__container--link">
                    <h1 className="footer__header">Links</h1>
                    <div className="footer__container--row">
                        <a className="footer__link" href="https://github.com/rileydnorris">GitHub</a>
                    </div>
                    <div className="footer__container--row">
                        <a className="footer__link" href="https://www.linkedin.com/in/riley-norris-a4a40b117/">LinkedIn</a>
                    </div>
                </div>
            </div>
        )
    }
}