import React from 'react';
import {useNavigate, useParams} from "react-router";
import Button from "rsuite/Button";
import {useDispatch, useSelector} from "react-redux";
import {removeContact} from "../store/slices/contacts";

const ConfirmRemove = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();

    const currentContact = useSelector(state =>
        state.contacts.users.find(
            contact => contact.id === id));

    const redirectBack = () => navigate(-1);

    const handleConfirmRemove = () => {
        console.log(currentContact)
        dispatch(removeContact(currentContact));
        navigate("/")
    };

    return (
        <>

            <main>

                <h2>Remove contact</h2>
                <hr/>
                <h4>Are you sure?</h4>
                <div>
                    <Button color="green" appearance="primary" onClick={handleConfirmRemove}>Confirm</Button>
                    <Button color="red" appearance="primary" onClick={redirectBack}>Cancel</Button>
                </div>

            </main>

        </>
    );
};

export default ConfirmRemove;