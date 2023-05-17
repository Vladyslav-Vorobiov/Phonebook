import Container from "react-bootstrap/Container";
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import {Input, InputGroup, IconButton} from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import SearchIcon from '@rsuite/icons/Search';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import React, {useState} from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const HomePage = () => {

    const [searchValue, setSearchValue] = useState('');
    const contacts = useSelector(state => state.contacts.users);
    const navigate = useNavigate();
    const redirectAddContact = () => {
        navigate("new-contact");
    };
    const redirectContactData = (id) => () => {
        navigate('contact-data/' + id);
    };
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };
    const handleReset = () => {
        setSearchValue('');
    };
    const filteredContacts = contacts.filter(contact => {
        if (contact.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
            contact.phoneNumber.includes(searchValue)) {
            return contact.firstName;
        } else {
            return false;
        }
    });

    const sortedContacts = filteredContacts.sort(function (a, b) {
        if (a.firstName > b.firstName) {
            return 1;
        }
        if (a.firstName < b.firstName) {
            return -1;
        }
        return 0;
    });

    const renderContactsList = () => {
        return (
            <ul className="contacts">
                {sortedContacts.map(contact =>
                    <li key={contact.id} className="contacts__list-item fw-bold">
                        <div className="d-flex justify-content-between align-items-center">
                            <p>{contact.firstName} {contact.lastName}</p>
                            <IconButton className="p-1 btn-details"
                                        size="md"
                                        circle
                                        color="red"
                                        onClick={redirectContactData(contact.id)}
                                        icon={<ArrowRightLineIcon className="btn-details__icon"/>}
                            />
                        </div>
                    </li>)
                }
            </ul>
        );
    };


    return (
        <>
            <Container>
                <div className="d-flex justify-content-center align-items-center fw-bold mb-4">
                    <div className="img-wrapper">
                        <img
                            className="main-icon"
                            src="./main-icon.png"
                            alt="phone book icon"
                        />
                    </div>
                    <h2>Phone Book</h2>
                </div>
                <Row>
                    <Col xs md lg={8} xl={6} xxl={5} className="outer-wrapper main-col m-auto">
                        <div className="main-col__actions d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
                            <div className="search-bar order-last order-md-first">
                                <InputGroup
                                    id="search"
                                    className="search-bar"
                                    size="md"
                                    disabled={!!!contacts.length}
                                    onChange={handleChange}
                                >
                                    <InputGroup.Addon className="search-bar__icon">
                                        <SearchIcon className="icon-size"/>
                                    </InputGroup.Addon>
                                    <Input
                                        value={searchValue}
                                        placeholder="Search"
                                        className="search-bar__placeholder"
                                    />
                                    <InputGroup.Button
                                        data-btn-dis="btn-dis"
                                        className="search-bar__btn-reset"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </InputGroup.Button>
                                </InputGroup>
                            </div>
                            <div className="btn-add order-first order-md-last mb-3 mb-md-0">
                                <IconButton
                                    className="btn-add"
                                    icon={<PlusIcon/>}
                                    size="md"
                                    color="green"
                                    appearance="primary"
                                    onClick={redirectAddContact}
                                >
                                    Add contact
                                </IconButton>
                            </div>
                        </div>
                        <hr className="divider"/>
                        {contacts.length ?
                            renderContactsList()
                            :
                            <p>No contacts found.</p>}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;