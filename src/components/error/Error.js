import React from "react";
import '../../App.scss';
import './Error.scss';

// 3rd Party Imports
import { Col } from "react-bootstrap";

function Error() {
    return (
        <Col xs={12}>
            <div className="error-container">
                <div className="error-container__inner">
                    <h1>Error page not found!</h1>
                </div>
            </div>
        </Col>
    )
}

export default Error;