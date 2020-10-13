import React, { Fragment } from "react";
import '../../App.scss';
import './Home.scss';

// 3rd Party Imports
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { Col } from "react-bootstrap";

// Components
import CategoryCard from '../category/card/Card';

// Images
import VillagersCardIcon from '../../images/card-icons/villagers.png';
import FishingCardIcon from '../../images/card-icons/fishing.png';
import BugCardIcon from '../../images/card-icons/bugcatching.png';
// import SeaCreaturesCardIcon from '../../images/card-icons/seacreatures.png';
import FurnitureCardIcon from '../../images/card-icons/furniture.png';
import ClothingCardIcon from '../../images/card-icons/clothing.png';
import MysteryIslandCardIcon from '../../images/card-icons/mysteryisland.png';
import DIYCardIcon from '../../images/card-icons/diy.png';
import NookMilesCardIcon from '../../images/card-icons/nookmiles.png';

function Home(props) {
    // Rerouting
    let history = useHistory();

    return (
        <Col>
            <h1>Hello there villager!</h1>
            <p>Project using a free and open source API</p>
            <a src="http://acnhapi.com/">ACNH API/</a>
        </Col>
    )
}

export default Home;