import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import EditIcon from '@rsuite/icons/Edit';
import Button from 'rsuite/Button';
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';
import MainStructure from "../../templates/MainStructure";


const ContactData = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const currentContact = useSelector(state =>
        state.contacts.users.find(
            contact => contact.id === id));

    const redirectBack = () => navigate(-1);

    const redirectToEdit = () => navigate('edit/');

    const contactInfo = [
        {
            id: 1,
            title: "First name",
            subtitle: currentContact.firstName
        },
        {
            id: 2,
            title: "Last name",
            subtitle: currentContact.lastName
        },
        {
            id: 3,
            title: "Phone number",
            subtitle: currentContact.phoneNumber
        },
        {
            id: 4,
            title: "Position",
            subtitle: currentContact.position
        }
    ];

    const templateProps = {
        title: `${currentContact.firstName}'s Data`
    };

    return (
        <>
            <MainStructure {...templateProps}>
                <div className="inner-wrapper mb-4">
                    {contactInfo.map(contact => {
                        return (
                            <React.Fragment key={contact.id}>
                                <p className="mb-1 chapter-title">{contact.title}</p>
                                <p className="m-0 chapter-content">{contact.subtitle}</p>
                                <hr className="divider mt-2 mb-2"/>
                            </React.Fragment>);
                    })}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <Button
                        className="btn"
                        color="cyan"
                        appearance="primary"
                        size="md"
                        onClick={redirectBack}
                    >
                        <ArrowLeftLineIcon className="icon-size"/>
                        Back
                    </Button>
                    <Button
                        className="btn"
                        color="green"
                        appearance="primary"
                        size="md"
                        onClick={redirectToEdit}
                    >
                        <EditIcon className="icon-size"/>
                        <span className="ms-1">Edit</span>
                    </Button>
                </div>
            </MainStructure>
        </>
    );
};

export default ContactData;