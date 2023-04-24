import MainStructure from "../templates/MainStructure";
import ContactForm from "../components/ContactForm";
import {useDispatch} from "react-redux";
import _ from 'lodash';
import {addContact} from "../store/slices/contacts";
import {useNavigate} from "react-router-dom";

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

    const templateProps = {
        title: "Add New Contact"
    };

    return (
        <>
            <MainStructure {...templateProps}>
                <ContactForm formInitialValues={formInitialValues} formSubmitHandler={handleAddContact}/>
            </MainStructure>
        </>

    );
};

export default AddContact;