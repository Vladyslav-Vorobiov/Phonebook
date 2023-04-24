import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainStructure = (props) => {

    const {title} = props;

    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={5} className="outer-wrapper align-items-center">
                    <h4 className="page-title m-0 text-center">{title}</h4>
                    <hr className="m-0 mt-2 mb-3"/>
                    {props.children}
                </Col>
            </Row>
        </Container>
    );
};

export default MainStructure;