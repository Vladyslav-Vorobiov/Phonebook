import '../assets/scss/mainWrapperStyle.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchIcon from "../components/UI/SearchIcon";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";
import List from 'rsuite/List';


const HomePage = () => {

    const navigate = useNavigate();

    const redirectAddContact = () => {
        navigate("new-contact");
    };

    const redirectContactData = (id) => () => {
        navigate('contact-data/' + id);
    };

    const contacts = useSelector(state => state.contacts.users);

    const renderContactsList = () => {
        console.log(contacts)
        return (
            <List>
                {contacts.map(contact =>
                    <List.Item
                        key={contact.id}
                        onClick={redirectContactData(contact.id)}
                    >
                        {contact.firstName} {contact.lastName}
                    </List.Item>)}
            </List>
        );
    };


    return (
        <>
            <main>
                <h1 className='text-center mt-5 mb-5 fw-bold'>PhoneBook</h1>

                <Container>
                    <div className="box main-wrapper">
                        <Row>
                            <Col xs={4}>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <SearchIcon/>
                                    </InputGroup.Text>
                                    <Form.Control
                                        // disabled={!!!contacts.length}
                                        placeholder="Search..."
                                        aria-label="Username"
                                    />
                                    <InputGroup.Text>
                                        <Button className='m-0 p-0' variant="transparent"
                                            // disabled={!!!contacts.length}
                                        >Reset</Button>
                                    </InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col xs={4}>
                                <Button variant="success" onClick={redirectAddContact}>Add contact</Button>
                            </Col>
                        </Row>
                        <Row>
                            <ul>
                                {contacts ? renderContactsList() : 'No contacts yet...'}
                            </ul>
                        </Row>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default HomePage;