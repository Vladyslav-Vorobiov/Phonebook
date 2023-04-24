import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ContactForm from "../components/ContactForm";
import {useDispatch} from "react-redux";
import {editContact, removeContact} from "../store/slices/contacts";
import React from "react";
import BtnWithModal from "../components/BtnWithModal";
import MainStructure from "../templates/MainStructure";

const EditContact = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const currentContact = useSelector(state =>
        state.contacts.users.find(
            contact => contact.id === id));

    const handleEditContact = (values) => {
        dispatch(editContact({id, ...values}));
        navigate(-1);
    };

    const handleConfirmRemove = () => {
        dispatch(removeContact(currentContact));
        navigate("/");
    };

    const formInitialValues = {
        firstName: currentContact.firstName || '',
        lastName: currentContact.lastName || '',
        phoneNumber: currentContact.phoneNumber || '',
        position: currentContact.position || ''
    };

    const removeContactBtn = () => {
        return (
            <BtnWithModal handleConfirmRemove={handleConfirmRemove}>Remove contact</BtnWithModal>
        );
    };

    const templateProps = {
        title: `Edit ${currentContact.firstName}`
    };

    return (
        <>
            <MainStructure {...templateProps}>
                <ContactForm formInitialValues={formInitialValues}
                             formSubmitHandler={handleEditContact}
                             removeContact={removeContactBtn}
                />
            </MainStructure>
        </>
    );
};

export default EditContact;