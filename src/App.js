import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NavigationBarComponent from './components/navigation-bar/navigation-bar'
import FooterComponent from './components/footer/footer'
import ExperiencePage from './pages/experience/experience';
import HomePage from './pages/home/home';
import './app/shared.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBarComponent/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/home" component={HomePage}/>
            <Route path="/experience" component={ExperiencePage}/>
          </Switch>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
