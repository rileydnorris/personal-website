import React from 'react';
import './css/shared.css';
import './css/home.css';
import professional_photo from './images/professional_photo.jpg'
import NavigationBarComponent from './components/navigation-bar.jsx'
import LinkCircleComponent from './components/link-circle.jsx'

function App() {
  return (
    <div>
      <NavigationBarComponent/>
      <div className="intro__container">
        <div className="intro__photo-container">
          <img className="intro__photo" src={professional_photo} alt=""/>
        </div>
        <div className="intro__text-circle-container">
          <h1 className="intro__title">Hello World.</h1>
          <p className="intro__subtitle">Texas A&M Computer Science student with two years of industry experience</p>
          <LinkCircleComponent bgColor='cadetBlue'/>
          <LinkCircleComponent bgColor='midnightBlue'/>
          <LinkCircleComponent bgColor='firebrick'/>
        </div>
      </div>
    </div>
  );
}

export default App;
