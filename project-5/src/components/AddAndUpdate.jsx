<<<<<<< HEAD
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required."),
    email: Yup.string().email("Invalid Email").required("Email is Required."),
})


const AddAndUpdate = ({ isOpen, onClose, isUpdate, contacts }) => {

    const addContact = async (contacts) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contacts);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contacts, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contacts);
            toast.success("Contact Updated Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    // formik only supports yup
                    validationSchema={contactSchemaValidation}
                    initialValues={isUpdate ? {
                        name: contacts.name,
                        email: contacts.email,
                    } : {
                        name: "",
                        email: "",
                    }}


                    onSubmit={(values) => {
                        console.log(values);

                        isUpdate ?
                            updateContact(values, contacts.id) :
                            addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-4 ">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="h-10 border" ></Field>
                            <div className="text-red-500 text-xs ">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="h-10 border" ></Field>
                            <div className="text-red-500 text-xs ">
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <button className="bg-orange px-3 py-1.5  self-end hover:text-white rounded-lg " > {isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdate;
=======
import Modal from "./Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is Required."),
    email: Yup.string().email("Invalid Email").required("Email is Required."),
})


const AddAndUpdate = ({ isOpen, onClose, isUpdate, contacts }) => {

    const addContact = async (contacts) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contacts);
            toast.success("Contact Added Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contacts, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contacts);
            toast.success("Contact Updated Successfully");
            onClose();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    // formik only supports yup
                    validationSchema={contactSchemaValidation}
                    initialValues={isUpdate ? {
                        name: contacts.name,
                        email: contacts.email,
                    } : {
                        name: "",
                        email: "",
                    }}


                    onSubmit={(values) => {
                        console.log(values);

                        isUpdate ?
                            updateContact(values, contacts.id) :
                            addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-4 ">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="h-10 border" ></Field>
                            <div className="text-red-500 text-xs ">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="h-10 border" ></Field>
                            <div className="text-red-500 text-xs ">
                                <ErrorMessage name="email" />
                            </div>
                        </div>

                        <button className="bg-orange px-3 py-1.5  self-end hover:text-white rounded-lg " > {isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdate;
>>>>>>> 869c2fb (test)
