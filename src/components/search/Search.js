import React, { useEffect, useState } from "react";
import '../../App.scss';
import './Search.scss';

// 3rd Party Imports
import { Container, Row, Col, Form } from "react-bootstrap";

function Search(props) {
    return (
        <Col xs={12} sm={6}>
            <div className="search-container">
                {/* WIP */}
                {/* {props.onLocationChange && (
                    <Col>
                        <Form.Group controlId="exampleForm.ControlSelect2">
                            <Form.Label>Location</Form.Label>
                            <Form.Control as="select" onChange={(event) => props.onLocationChange(event)}>
                                <option>River</option>
                                <option>Pond</option>
                                <option>Sea</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                )} */}
                <Form.Group className="custom-input">
                    <div className="custom-input__inner">
                        <Form.Control className="custom-input__inner__input" type="text" placeholder="Search..." onChange={(event) => props.onSearch(event)} />
                    </div>
                </Form.Group>
            </div>
        </Col>
    )
}

export default Search;
