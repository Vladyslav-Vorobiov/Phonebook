import {useNavigate, useParams} from "react-router";
import {useSelector} from "react-redux";
import ContactForm from "../components/ContactForm";
import {useDispatch} from "react-redux";
import {editContact} from "../store/slices/contacts";
import Button from "rsuite/Button";


const EditContact = () => {

    const {id} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentContact = useSelector(state =>
        state.contacts.users.find(
            contact => contact.id === id));

    const handleEditContact = (values) => {
        dispatch(editContact({id, ...values}));
        navigate(-1)
    }

    const handleRemoveContact = () => {
        navigate("remove")
    }

    const formInitialValues = {
        firstName: currentContact.firstName || '',
        lastName: currentContact.lastName || '',
        phoneNumber: currentContact.phoneNumber || '',
        position: currentContact.position || ''
    };

    const removeContactBtn = () => {
        return (
            <Button color="red" appearance="primary" onClick={handleRemoveContact}>Remove contact </Button>
        )
    }

    return (
        <>
            <main>
            <h2>Edit {currentContact.firstName}</h2>

            <ContactForm formInitialValues={formInitialValues} formSubmitHandler={handleEditContact} removeContact={removeContactBtn}/>
            </main>
        </>

    );
};

export default EditContact;