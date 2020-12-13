import React from "react";
import '../../App.scss';

// 3rd Party Imports
import { Col, Form } from "react-bootstrap";

function Search(props) {
    return (
        <Col xs={12} sm={6}>
            <div className="search-container">
                <Form.Group className="custom-input">
                    <Form.Label>Search</Form.Label>
                    <div className="custom-input__inner">
                        <Form.Control className="custom-input__inner__input" type="text" placeholder="Please enter search term..." onChange={(event) => props.onSearch(event)} />
                    </div>
                </Form.Group>
            </div>
        </Col>
    )
}

export default Search;
