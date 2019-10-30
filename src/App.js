import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ExperiencePage from "./pages/experience/experience";
import ProjectsPage from "./pages/projects/projects";
import AboutMePage from "./pages/about-me/about-me";
import PageNotFoundPage from "./pages/page-not-found/page-not-found";
import HomePage from "./pages/home/home";
import ContactPage from "./pages/contact/contact";
import NavigationBarComponent from "./components/navigation-bar/navigation-bar"
import FooterComponent from "./components/footer/footer"
import "./app/shared.css";
import "./app/colors.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBarComponent/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/experience" component={ExperiencePage}/>
            <Route path="/projects" component={ProjectsPage}/>
            <Route path="/about-me" component={AboutMePage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/*" component={PageNotFoundPage}/>
          </Switch>
        <FooterComponent id="footer"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
