import React, { Fragment, useEffect, useState } from "react";
import '../../App.scss';
import '../table/Table.scss';
import './Grid.scss';

// Images
import bellsImg from '../../images/modal-icons/bells.png';
import cjImg from '../../images/modal-icons/CJ.png';
import flickImg from '../../images/modal-icons/flick.png';

// 3rd Party Imports
import { Tooltip, OverlayTrigger, Modal, Button, Form, Row, Col } from "react-bootstrap";

function Grid(props) {
    // Modal Events
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState([]);
    const [months] = useState([{
        id: 1,
        name: "Jan",
    }, {
        id: 2,
        name: "Feb",
    },
    {
        id: 3,
        name: "Mar",
    },
    {
        id: 4,
        name: "Apr",
    },
    {
        id: 5,
        name: "May",
    },
    {
        id: 6,
        name: "Jun",
    },
    {
        id: 7,
        name: "Jul",
    },
    {
        id: 8,
        name: "Aug",
    },
    {
        id: 9,
        name: "Sep",
    },
    {
        id: 10,
        name: "Oct",
    },
    {
        id: 11,
        name: "Nov",
    },
    {
        id: 12,
        name: "Dec",
    }]);
    const [available, setAvailable] = useState([]);
    const [hemisphere, setHemisphere] = useState("month-array-northern");
    const [hemisphereText, setHemisphereText] = useState("Northern");

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setModalData(data);
        setAvailable(data.availability ? data.availability[hemisphere].map((available) => {
            return available;
        }) : "");
    }

    // WIP
    // Handle Events
    // const handleHemisphereChange = (hemisphere) => {
    //     // console.log(event.target.value);
    //     console.log(hemisphere);
    //     if (hemisphere === "Northern") {
    //         setHemisphere("month-array-southern");
    //         setHemisphereText("Southern");
    //     } else {
    //         setHemisphere("month-array-northern");
    //         setHemisphereText("Northern");
    //     }
    // }

    // // Component Did Mount
    // useEffect(() => {
    // }, [hemisphere]);

    return (
        <Col xs={12}>
            <div className="grid-container">
                <div className="grid">
                    {props.data && props.data.length > 1 ?
                        props.data.map((data) => (
                            <div className="grid__item" onClick={() => handleShow(data)}>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="grid__item__tooltip">{data["name"]["name-EUen"]}</Tooltip>}
                                >
                                    <div className="grid__item__inner">
                                        <img className="grid__item__img" src={data.icon_uri ? data.icon_uri : data.image_uri} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        )) : (
                            <div className="grid__item" onClick={() => handleShow(props.data)}>
                                <OverlayTrigger
                                    placement="top"
                                    overlay={
                                        <Tooltip className="grid__item__tooltip">{props.data["name"] ? props.data["name"]["name-EUen"] : ""}</Tooltip>}
                                >
                                    <div className="grid__item__inner">
                                        <img className="grid__item__img" src={props.data.icon_uri} />
                                    </div>
                                </OverlayTrigger>
                            </div>
                        )}
                    <Modal className={"modal " + props.type} size={props.type === "fossil" ? "md" : "lg"} show={show} onHide={handleClose}>
                        <Modal.Header className="modal__header" closeButton>
                            <Modal.Title className="modal__title">
                                {modalData.name ? (
                                    modalData["name"]["name-EUen"]
                                ) : ""}
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="modal__body">
                            <OverlayTrigger
                                placement="right"
                                overlay={
                                    <Tooltip className="grid__item__tooltip">{modalData["catch-phrase"] ? modalData["catch-phrase"] : modalData["museum-phrase"]}</Tooltip>}
                            >
                                <div className="modal__body__image">
                                    <img className="modal__body__image__inner" src={modalData["image_uri"]} />
                                </div>
                            </OverlayTrigger>
                            <div className="modal__body__inner">
                                {modalData["museum-phrase"] && (
                                    <section className="museum-phrase">
                                        <p>"{modalData["museum-phrase"]}"</p>
                                    </section>
                                )}
                                {props.type === "fish" | props.type === "bug" | props.type === "seacreature" | props.type === "fossil" && (
                                    <Fragment>
                                        {props.type != "fossil" && (
                                            <section className="season">
                                                <h2>Season</h2>
                                                {/* WIP */}
                                                {/* <Form.Check
                                            type="switch"
                                            id="custom-switch"
                                            label={hemisphereText}
                                            onChange={() => handleHemisphereChange(hemisphereText)}
                                        /> */}
                                                <div className="table">
                                                    {months.map((month) => (
                                                        <div className="table__item">
                                                            <div className={available.includes(month.id) ? "table__item__inner available" : "table__item__inner"}>{month.name}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </section>
                                        )}
                                        {/* WIP */}
                                        {/* <section className="hours">
                                    </section> */}
                                        <section className="info">
                                            <Row>
                                                {props.type === "fish" && (
                                                    <Fragment>
                                                        <Col xs={6} sm={3}>
                                                            <h2>Location</h2>
                                                            <p>{modalData["availability"] ? modalData["availability"]["location"] : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={3}>
                                                            <h2>Price</h2>
                                                            <p><img src={bellsImg} width="20" />{modalData["price"] ? modalData["price"] : ""} (<img src={cjImg} width="20" /><img src={bellsImg} width="20" />{modalData["price-cj"] ? modalData["price-cj"] : ""})</p>
                                                        </Col>
                                                        <Col xs={6} sm={3}>
                                                            <h2>Size</h2>
                                                            <p>{modalData["shadow"] ? modalData["shadow"] : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={3}>
                                                            <h2>Rarity</h2>
                                                            <p>{modalData["availability"] ? modalData["availability"]["rarity"] : ""}</p>
                                                        </Col>
                                                    </Fragment>
                                                )}

                                                {props.type === "bug" && (
                                                    <Fragment>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Location</h2>
                                                            <p>{modalData["availability"] ? modalData["availability"]["location"] : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Price</h2>
                                                            <p><img src={bellsImg} width="20" />{modalData["price"] ? modalData["price"] : ""} (<img src={flickImg} width="20" /><img src={bellsImg} width="20" />{modalData["price-flick"] ? modalData["price-flick"] : ""})</p>
                                                        </Col>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Rarity</h2>
                                                            <p>{modalData["availability"] ? modalData["availability"]["rarity"] : ""}</p>
                                                        </Col>
                                                    </Fragment>
                                                )}

                                                {props.type === "seacreature" && (
                                                    <Fragment>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Price</h2>
                                                            <p><img src={bellsImg} width="20" />{modalData["price"] ? modalData["price"] : ""} {modalData["price-cj"] ? (modalData["price-cj"]) : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Size</h2>
                                                            <p>{modalData["shadow"] ? modalData["shadow"] : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={4}>
                                                            <h2>Speed</h2>
                                                            <p>{modalData["speed"] ? modalData["speed"] : ""}</p>
                                                        </Col>
                                                    </Fragment>
                                                )}

                                                {props.type === "fossil" && (
                                                    <Fragment>
                                                        <Col xs={6} sm={6}>
                                                            <h2>Part of</h2>
                                                            <p>{modalData["part-of"] ? modalData["part-of"] : ""}</p>
                                                        </Col>
                                                        <Col xs={6} sm={6}>
                                                            <h2>Price</h2>
                                                            <p>{modalData["price"] && <Fragment><img src={bellsImg} width="20" />{modalData["price"]}</Fragment>}</p>
                                                        </Col>
                                                    </Fragment>
                                                )}
                                            </Row>
                                        </section>
                                    </Fragment>
                                )}
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </Col>
    )
}

export default Grid;