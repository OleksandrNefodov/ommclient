import React from "react";

import { Col, Row } from 'reactstrap';

import './Info.scss';

export default class Info extends React.PureComponent {

    render() {
        return (
            <Row noGutters>
                <Col>
                    <div className="info">
                        INFO
                    </div>
                </Col>
            </Row>
        );
    }
}