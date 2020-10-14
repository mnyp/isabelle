import React, { Fragment, useState } from "react";
import '../../App.scss';
import './Navbar.scss';

// 3rd Party Imports
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
    // States
    const [showDropdown, setShowDropdown] = useState(false);

    // Handle Eventws
    const toggleDropdown = () => {
        showDropdown ? setShowDropdown(false) : setShowDropdown(true);
    };

    return (
        <Fragment>
            <div className="navbar__inner navbar__inner--mobile">
                <DropdownButton id="navbar__inner__btn" title="Menu" onToggle={toggleDropdown} show={showDropdown}>
                    <Link className="navbar__link subtitle-2" to={"/"} onClick={() => setShowDropdown(false)}>Home</Link>
                    <Link className="navbar__link subtitle-2" to={"/villagers"} onClick={() => setShowDropdown(false)}>Villagers</Link>
                    <Link className="navbar__link subtitle-2" to={"/fish"} onClick={() => setShowDropdown(false)}>Fish</Link>
                    <Link className="navbar__link subtitle-2" to={"/bugs"} onClick={() => setShowDropdown(false)}>Bugs</Link>
                    <Link className="navbar__link subtitle-2" to={"/seacreatures"} onClick={() => setShowDropdown(false)}>Sea Creatures</Link>
                    <Link className="navbar__link subtitle-2" to={"/fossils"} onClick={() => setShowDropdown(false)}>Fossils</Link>
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