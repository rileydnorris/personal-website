import React from 'react';
import './app/shared.css';
import './pages/home/home.css';
import professional_photo from './images/professional_photo.jpg'
import NavigationBarComponent from './components/navigation-bar/navigation-bar'
import LinkCircleComponent from './components/link-circle/link-circle'
import FooterComponent from './components/footer/footer'

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
          <LinkCircleComponent bgColor='cadetBlue' title='Experience' link=''/>
          <LinkCircleComponent bgColor='midnightBlue' title='Projects' link=''/>
          <LinkCircleComponent bgColor='firebrick' title='Contact' link=''/>
        </div>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
