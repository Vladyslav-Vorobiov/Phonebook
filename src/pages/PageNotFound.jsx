import React from 'react';
import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
import Button from "rsuite/Button";

const PageNotFound = () => {

    const navigate = useNavigate();
    const navigateHome = () => navigate("/");

    return (
        <Container>
            <div className="outer-wrapper text-center mt-5 m-auto w-50 ">
                <h1 className='mb-3 fw-bold'>Oops!</h1>
                <h6 className="fw-normal mb-4">Sorry, the requested page does not exist.</h6>
                <Button className="btn"
                        color="green"
                        appearance="primary"
                        onClick={navigateHome}>Home
                </Button>
            </div>
        </Container>
    );
};

export default PageNotFound;