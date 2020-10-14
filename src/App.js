import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss';

// 3rd Party Imports
import { Link, Route, Switch, useHistory } from "react-router-dom";

// Components
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Villager from './components/category/villager/Villager';
import Fish from './components/category/fish/Fish';
import Bug from './components/category/bug/Bug';
import SeaCreatures from './components/category/seacreature/SeaCreature';
import Fossils from './components/category/fossil/Fossil';
import Error from './components/error/Error';

function App() {
  return (
    <div className="isabelle-container">
      <header className="wave-bg wave-bg--top">
        <nav className="navbar">
          <Navbar />
        </nav>
      </header>
      <section className="main-content">
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/villagers" component={Villager} exact />
              <Route path="/fish" component={Fish} exact />
              <Route path="/bugs" component={Bug} exact />
              <Route path="/seacreatures" component={SeaCreatures} exact />
              <Route path="/fossils" component={Fossils} exact />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </section>
      <footer className="wave-bg wave-bg--bottom">
        <p className="copyright">© 2020 Nintendo. Animal Crossing is a trademark of Nintendo.</p>
      </footer>
    </div>
  );
}

export default App;
