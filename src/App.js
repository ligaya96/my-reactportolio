import React from "react"
import AboutMe from "./components/aboutme"
import Header from "./components/header"
import ContactMe from "./components/contactme"
import Portfolio from "./components/myportfolio"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
       <Switch> 
         <Route exact path = "/aboutme" component= {AboutMe} />
         <Route exact path = "/contactme" component= {ContactMe} />
         <Route exact path = "/myportfolio" component= {Portfolio} />
       </Switch>
    </div>
    </Router>
  );
}
export default App;
