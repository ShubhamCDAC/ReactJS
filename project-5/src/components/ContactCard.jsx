import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";

const Contact = ({ contacts }) => {
    return (
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
            <RiEditCircleLine className="cursor-pointer" />
            <IoMdTrash className="text-purple cursor-pointer" />
        </div>
    </div>
    )
}

export default Contact;