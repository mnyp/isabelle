import React from "react";
import "../../App.scss";

// 3rd Party Imports
import { Col, Form } from "react-bootstrap";

function Filter(props) {
    return (
        <Col xs={12} sm={3}>
            <div className="filter-container">
                {props.onLocationChange && (
                    <Col>
                        <Form.Group controlId="filter-location">
                            <Form.Label>Location</Form.Label>
                            <div className="custom-input__inner">
                                <Form.Control className="custom-input__inner__input" as="select" onChange={(event) => props.onLocationChange(event)}>
                                    <option>All</option>
                                    <option>River</option>
                                    <option>Pond</option>
                                    <option>Sea</option>
                                </Form.Control>
                            </div>
                        </Form.Group>
                    </Col>
                )}
                {props.onSizeChange && (
                    <Col>
                        <Form.Group controlId="filter-size">
                            <Form.Label>Size</Form.Label>
                            <div className="custom-input__inner">
                                <Form.Control className="custom-input__inner__input" as="select" onChange={(event) => props.onSizeChange(event)}>
                                    <option>All</option>
                                    <option>X-Small</option>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Medium w/Fin</option>
                                    <option>Large</option>
                                    <option>Large w/Fin</option>
                                    <option>X-Large</option>
                                    <option>XX-Large</option>
                                    <option>Long</option>
                                </Form.Control>
                            </div>
                        </Form.Group>
                    </Col>
                )}
            </div>
        </Col>
    )
}

export default Filter;