import React, { Fragment, useEffect, useState } from "react";
import '../../../App.scss';

// Third Party Imports
import { Modal, OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";

// Components
import Table from '../../table/Table';
import FemaleIcon from '../../../images/modal-icons/gender-female.png';
import MaleIcon from '../../../images/modal-icons/gender-male.png';

// Axios
const axios = require('axios');

function Villagers(props) {
    // Modal Events
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = (event, data) => {
        setShow(true);
        setModalData(data);
    }

    // States
    const [villagers, setVillagers] = useState([]);
    const [url, setUrl] = useState("https://acnhapi.com/v1a/villagers/");
    const [searchTerm, setSearchTerm] = useState("");
    // const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // Material Table
    const [personalityLookup] = useState({ Cranky: "Cranky", Jock: "Jock", Lazy: "Lazy", Normal: "Normal", Peppy: "Peppy", Smug: "Smug", Snooty: "Snooty", Uchi: "Uchi" });
    const [genderLookup] = useState({ Female: "Female", Male: "Male" });
    const [hobbyLookup] = useState({
        Education: "Education",
        Fashion: "Fashion",
        Fitness: "Fitness",
        Music: "Music",
        Nature: "Nature",
        Play: "Play",
    });
    const [speciesLookup] = useState({
        Alligator: "Alligator",
        Anteater: "Anteater",
        Bear: "Bear",
        Bird: "Bird",
        Bull: "Bull",
        Cat: "Cat",
        Chicken: "Chicken",
        Cow: "Cow",
        Cub: "Cub",
        Deer: "Deer",
        Dog: "Dog",
        Duck: "Duck",
        Eagle: "Eagle",
        Elephant: "Elephant",
        Frog: "Frog",
        Goat: "Goat",
        Gorilla: "Gorilla",
        Hamster: "Hamster",
        Hippo: "Hippo",
        Horse: "Horse",
        Kangaroo: "Kangaroo",
        Koala: "Koala",
        Lion: "Lion",
        Monkey: "Monkey",
        Mouse: "Mouse",
        Octopus: "Octopus",
        Ostrich: "Ostrich",
        Penguin: "Penguin",
        Pig: "Pig",
        Rabbit: "Rabbit",
        Rhino: "Rhino",
        Sheep: "Sheep",
        Squirrel: "Squirrel",
        Tiger: "Tiger",
        Wolf: "Wolf"
    });
    const [subTypeLookup] = useState({ A: "A", B: "B" });

    const [columns] = useState([
        {
            title: "Avatar",
            field: "icon_uri",
            render: rowData => <div className="custom-table__image"><img src={rowData.icon_uri} /></div>,
            filtering: false
        },
        {
            title: "Name",
            field: "name.name-EUen"
        },
        {
            title: "Personality",
            field: "personality",
            lookup: personalityLookup
        },
        {
            title: "Gender",
            field: "gender",
            lookup: genderLookup
        },
        {
            title: "Hobby",
            field: "hobby",
            lookup: hobbyLookup
        },
        {
            title: "Species",
            field: "species",
            lookup: speciesLookup
        },
        {
            title: "SubType",
            field: "subtype",
            lookup: subTypeLookup
        }
    ]);

    // On Load
    const updateVillagers = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(url + searchTerm);
            setVillagers(result.data);
        } catch (error) {
            setIsError(true);
        }
        setIsLoading(false);
    };

    // Component Did Mount
    useEffect(() => {
        updateVillagers();
    }, [searchTerm]);

    return (
        <Fragment>
            <Table title="Villagers" columns={columns} data={villagers} filtering="true" onRowClick={handleShow} />
            <Modal className={"modal " + props.type} size="md" show={show} onHide={handleClose}>
                <Modal.Header className="modal__header" closeButton style={{ background: modalData["bubble-color"] }}>
                    <Modal.Title className="modal__title">
                        {modalData.name ? (
                            modalData["name"]["name-EUen"]
                        ) : ""}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal__body" style={{ background: modalData["bubble-color"] }}>
                    <OverlayTrigger
                        placement="right"
                        overlay={
                            <Tooltip className="grid__item__tooltip">{modalData["catch-phrase"] ? modalData["catch-phrase"] : modalData["museum-phrase"]}</Tooltip>}
                    >
                        <img className="modal__body__image modal__body__image--lg" src={modalData["image_uri"]} />
                    </OverlayTrigger>
                    <div className="modal__body__inner">
                        {modalData["saying"] && (
                            <section className="saying">
                                <p>"{modalData["saying"]}"</p>
                            </section>
                        )}
                        <Fragment>
                            <section className="info">
                                <Row>
                                    <Col xs={6} sm={4}>
                                        <h2>Birthday</h2>
                                        <p>{modalData["birthday-string"] ? modalData["birthday-string"] : ""}</p>
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <h2>Gender</h2>
                                        <p>{modalData["gender"] ? modalData["gender"] === "Female" ? <Fragment><img className="gender" src={FemaleIcon} width="20" />Female</Fragment> : <Fragment><img className="mr-1 gender" src={MaleIcon} width="15" />Male</Fragment> : ""}</p>
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <h2>Hobby</h2>
                                        <p>{modalData["hobby"] ? modalData["hobby"] : ""}</p>
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <h2>Personality</h2>
                                        <p>{modalData["personality"] ? modalData["personality"] : ""}</p>
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <h2>Species</h2>
                                        <p>{modalData["species"] ? modalData["species"] : ""}</p>
                                    </Col>
                                    <Col xs={6} sm={4}>
                                        <h2>Subtype</h2>
                                        <p>{modalData["subtype"] ? modalData["subtype"] : ""}</p>
                                    </Col>
                                </Row>
                            </section>
                        </Fragment>
                    </div>
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}

export default Villagers;