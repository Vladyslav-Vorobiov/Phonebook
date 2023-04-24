import React, {useState} from "react";
import {Modal, ButtonToolbar, Button} from 'rsuite';
import RemindIcon from '@rsuite/icons/legacy/Remind';

const BtnWithModal = ({handleConfirmRemove}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ButtonToolbar>
                <Button
                    className="btn"
                    color="red"
                    appearance="primary"
                    onClick={handleOpen}
                >
                    Delete
                </Button>
            </ButtonToolbar>
            <Modal
                backdrop="static"
                role="alertdialog"
                open={open}
                onClose={handleClose}
                size="xs"
            >
                <Modal.Body className="modal-box text-center">
                    <RemindIcon className="modal-box__icon"/>
                    <p className="mb-3"> Once you confirm the current contact will be deleted from your phone book.</p>
                    <span className="modal-box__subtitle"> Are you sure? </span>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button className="btn" color="green" onClick={handleConfirmRemove} appearance="primary">
                        Confirm
                    </Button>
                    <Button className="btn" color="cyan" onClick={handleClose} appearance="primary">
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BtnWithModal;
