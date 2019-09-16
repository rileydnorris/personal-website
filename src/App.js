import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ExperiencePage from './pages/experience/experience';
import ProjectsPage from './pages/projects/projects';
import HomePage from './pages/home/home';
import NavigationBarComponent from './components/navigation-bar/navigation-bar'
import FooterComponent from './components/footer/footer'
import './app/shared.css';
import './app/colors.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBarComponent/>
          <Switch>
            {/* Internal Links */}
            <Route exact path="/" component={HomePage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/experience" component={ExperiencePage}/>
            <Route path="/projects" component={ProjectsPage}/>

            {/* External Links */}
            {/* <Route exactly pattern="/google" component={() => window.location = 'http://google.com'} /> */}
          </Switch>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
