import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";
import useDisclouse from "../hooks/useDisclouse";
import { isObject } from "formik";
import { toast } from "react-toastify";

const Contact = ({ contacts }) => {

    const { isOpen, onClose, onOpen } = useDisclouse();

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Successfully.");

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div key={contacts.id}
                className="bg-yellow rounded-lg flex justify-between items-center p-2">
                <div className="flex gap-1">
                    <HiOutlineUserCircle className="text-orange text-4xl " />
                    <div className="">
                        <h2 className="text-md">{contacts.name}</h2>
                        <p className="text-sm">{contacts.email}</p>
                    </div>
                </div>
                <div className="flex text-3xl gap-3">
                    <RiEditCircleLine
                        onClick={onOpen}
                        className="cursor-pointer" />
                    <IoMdTrash
                        onClick={() => deleteContact(contacts.id)}
                        className="text-purple cursor-pointer" />
                </div>
            </div>
            <AddAndUpdate contacts={contacts} isOpen={isOpen} onClose={onClose} isUpdate />
        </>
    )
}

export default Contact;
