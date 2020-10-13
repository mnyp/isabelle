import React, { Fragment } from "react";
import '../../App.scss';
import './Navbar.scss';

// 3rd Party Imports
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <Fragment>
            <div className="navbar__inner navbar__inner--mobile">
                <DropdownButton id="navbar__inner__btn" title="Menu">
                    <Link className="navbar__link subtitle-2" to={"/"}>Home</Link>
                    <Link className="navbar__link subtitle-2" to={"/villagers"}>Villagers</Link>
                    <Link className="navbar__link subtitle-2" to={"/fish"}>Fish</Link>
                    <Link className="navbar__link subtitle-2" to={"/bugs"}>Bugs</Link>
                    <Link className="navbar__link subtitle-2" to={"/seacreatures"}>Sea Creatures</Link>
                    <Link className="navbar__link subtitle-2" to={"/fossils"}>Fossils</Link>
                </DropdownButton>
            </div>

            <ul className="navbar__inner navbar__inner--desktop">
                <li>
                    <Link className="navbar__link subtitle-2" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="navbar__link subtitle-2" to={"/villagers"}>Villagers</Link>
                </li>
                <li>
                    <Link className="navbar__link subtitle-2" to={"/fish"}>Fish</Link>
                </li>
                <li>
                    <Link className="navbar__link subtitle-2" to={"/bugs"}>Bugs</Link>
                </li>
                <li>
                    <Link className="navbar__link subtitle-2" to={"/seacreatures"}>Sea Creatures</Link>
                </li>
                <li>
                    <Link className="navbar__link subtitle-2" to={"/fossils"}>Fossils</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default Navbar;