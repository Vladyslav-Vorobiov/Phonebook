import React from 'react';
import {useNavigate, useParams} from "react-router";
import {useSelector} from "react-redux";
import EditIcon from '@rsuite/icons/Edit';
import Button from 'rsuite/Button';


const ContactData = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const redirectBack = () => navigate(-1);

    const redirectToEdit = () => navigate('edit/');


    const currentContact = useSelector(state =>
        state.contacts.users.find(
            contact => contact.id === id));

    return (
        <>
            <main className="w-25">

                <h2>{currentContact.firstName} data</h2>
                <hr/>

                <div className="d-flex justify-content-between mb-3">
                    <Button color="cyan" appearance="primary" onClick={redirectBack}>Back</Button>
                    <Button color="cyan" appearance="primary" onClick={redirectToEdit}>
                        <EditIcon style={{width: 20, height: 20}}/>
                        <span className="ms-2">Edit contact</span>
                    </Button>
                </div>

                <div>
                    <p>First name</p>
                    <p>{currentContact.firstName}</p>
                </div>
                <div>
                    <p>Last name</p>
                    <p>{currentContact.lastName}</p>
                </div>
                <div>
                    <p>Phone number</p>
                    <p>{currentContact.phoneNumber}</p>
                </div>
                <div>
                    <p>Position</p>
                    <p>{currentContact.position}</p>
                </div>

            </main>
        </>
    );
};

export default ContactData;