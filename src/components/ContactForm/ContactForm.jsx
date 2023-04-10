import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, ButtonToolbar} from "rsuite";
import {useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form"


const formValidationRules = Yup.object({
    firstName: Yup.string().trim()
        .min(3, 'Must be 3 characters or more')
        .max(50, 'Must be 30 characters or less')
        .required('This field is required'),
    lastName: Yup.string().trim()
        .min(3, 'Must be 3 characters or more')
        .max(50, 'Must be 50 characters or less')
        .required('This field is required'),
    phoneNumber: Yup.number()
        .min(3, 'Must be 3 characters or more')
        .required('This field is required'),
    position: Yup.string().trim()
        .min(3, 'Must be 3 characters or more')
        .max(70, 'Must be 70 characters or less')
        .required('This field is required'),
});


const ContactForm = (props) => {

    const navigate = useNavigate();
    const redirectBack = () => navigate(-1);

    const formik = useFormik({
        initialValues: props.formInitialValues,
        validationSchema: formValidationRules,
        onSubmit: values => props.formSubmitHandler(values)

    });

    return (

        <Form onSubmit={formik.handleSubmit} className='w-25'>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label className='fw-bold'>First name</Form.Label>
                <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}/>
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div style={{color: "tomato"}}>{formik.errors.firstName}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label className='fw-bold'>Last name</Form.Label>
                <Form.Control
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}/>
                {formik.touched.lastName && formik.errors.lastName ? (
                    <div style={{color: "tomato"}}>{formik.errors.lastName}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label className='fw-bold'>Phone</Form.Label>
                <Form.Control
                    name="phoneNumber"
                    type="text"
                    placeholder="Enter phone number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}/>
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div style={{color: "tomato"}}>{formik.errors.phoneNumber}</div>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label className='fw-bold'>Position</Form.Label>
                <Form.Control
                    name="position"
                    type="text"
                    placeholder="Enter position"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.position}/>
                {formik.touched.position && formik.errors.position ? (
                    <div style={{color: "tomato"}}>{formik.errors.position}</div>
                ) : null}
            </Form.Group>
            <Form.Group>
                <ButtonToolbar>
                    <Button type="submit" color="green" appearance="primary">Save</Button>
                    <Button color="cyan" appearance="primary" onClick={redirectBack}>Cancel</Button>
                    {props.removeContact ? props.removeContact() : null}
                </ButtonToolbar>
            </Form.Group>
        </Form>

    );
};

export default ContactForm;