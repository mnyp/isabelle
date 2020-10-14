import React, { Fragment } from "react";
import '../../App.scss';
import './Home.scss';

// 3rd Party Imports
import { Col } from "react-bootstrap";

// Components
import JoeyImg from '../../images/modal-icons/joey.png';

function Home() {
    return (
        <Fragment>
            <Col xs={12} md={8}>
                <div className="welcome-container">
                    <div className="welcome-container__inner">
                        <h1>Hello there villager!</h1>
                        <p>This is a personal project of mine, I love all things Animal Crossing and built this web app to make it easier to search and filter specific Animal Crossing items e.g. fish, bugs, fossils etc. I hope you find it useful!</p>
                        <h3>Background</h3>
                        <p>I'm a professional Frontend developer and have been for the past 6+ years, in my past time I love to play games and eat delicious foods.</p>
                        <h3>Technology</h3>
                        <p>This project is built with love using HTML, SASS, React JS framework and hosted on Heroku.</p>
                        <h3>FYI</h3>
                        <p>I hope you enjoy this, it is an ongoing project and more updates will be added in the near future.</p>
                        <h3>Random Fact</h3>
                        <p>My favourite villager in Animal Crossing definitely has to be Joey!</p>
                        <img src={JoeyImg} />
                    </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className="welcome-sidebar">
                    <div className="welcome-sidebar__inner">
                        <h3>Useful Links</h3>
                        <ul className="custom-list">
                            <li className="custom-list__link">
                                <a href="http://acnhapi.com/" target="_blank" className="custom-list__link__anchor">ACNH API</a>
                            </li>
                            <li className="custom-list__link">
                                <a href="https://store.nintendo.co.uk/merchandise/animal-crossing.list" target="_blank" className="custom-list__link__anchor">Nintendo Store</a>
                            </li>
                            <li className="custom-list__link">
                                <a href="https://animalcrossing.fandom.com/wiki/Animal_Crossing:_New_Horizons" target="_blank" className="custom-list__link__anchor">ACNH Wiki</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="welcome-sidebar">
                    <div className="welcome-sidebar__inner">
                        <h3>Upcoming updates</h3>
                        <ul className="custom-list">
                            <li className="custom-list__link">
                                <p className="custom-list__link__anchor">Updating APIs to return more options e.g. more specific search parameters</p>
                            </li>
                            <li className="custom-list__link">
                                <p className="custom-list__link__anchor">Adding filtering options on the Fish, Bugs and Fossils Pages</p>
                            </li>
                            <li className="custom-list__link">
                                <p className="custom-list__link__anchor">Add additional pages e.g. Furniture and Songs</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Fragment>
    )
}

export default Home;