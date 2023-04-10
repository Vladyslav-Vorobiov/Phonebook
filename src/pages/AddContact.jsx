import Container from "react-bootstrap/Container";
import ContactForm from "../components/ContactForm";
import {useDispatch} from "react-redux";
import _ from 'lodash';
import {addContact} from "../store/slices/contacts";
import {useNavigate} from "react-router";


const AddContact = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleAddContact = (values) => {
        const id = _.uniqueId();
        dispatch(addContact({id, ...values}));
        navigate(-1);
    };

    const formInitialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        position: ''
    };

    return (
        <>
            <main>
                <h1 className='text-center mt-5 mb-5  fw-bold'>Add new contact</h1>

                <Container>
                    <div className="box main-wrapper">
                        <ContactForm formInitialValues={formInitialValues} formSubmitHandler={handleAddContact}/>
                    </div>
                </Container>

            </main>
        </>

    );
};

export default AddContact;